import readline from 'readline';
import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  Browsers
} from '@whiskeysockets/baileys';
import pino from 'pino';
import { SESSION_DIR } from '../config.js';
import { deleteSession } from './session.js';
import { startBot } from './hamatrix_debug.js';  // ← import startBot for reconnection

const logger = pino({ level: 'debug' });

function askNumber() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question('📱 Enter your WhatsApp number (no +, spaces): ', (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

export async function pairDevice() {
  let phoneNumber = '';
  while (!/^\d{10,15}$/.test(phoneNumber)) {
    phoneNumber = await askNumber();
    if (!/^\d{10,15}$/.test(phoneNumber)) {
      console.log('❌ Invalid number. Try again.');
    }
  }
  console.log('🔢 Phone number entered:', phoneNumber);

  deleteSession();

  const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR);
  const { version } = await fetchLatestBaileysVersion();
  console.log('🔧 Baileys version:', version);

  const sock = makeWASocket({
    version,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger)
    },
    logger,
    browser: Browsers.macOS('Safari'),
    printQRInTerminal: true,
    markOnlineOnConnect: false,
    syncFullHistory: false,
    generateHighQualityLinkPreview: false,
    keepAliveIntervalMs: 25000,
    retryRequestDelayMs: 1500,
    connectTimeoutMs: 120000,
    defaultQueryTimeoutMs: 20000
  });

  sock.ev.on('creds.update', (data) => {
    console.log('💾 creds.update event fired');
    saveCreds(data);
  });

  return new Promise(async (resolve, reject) => {
    let codeRequested = false;
    let retries = 0;
    const maxRetries = 2;
    let resolved = false;
    const safeResolve = (val) => { if (!resolved) { resolved = true; resolve(val); } };
    const safeReject = (err) => { if (!resolved) { resolved = true; reject(err); } };

    const giveUp = setTimeout(() => {
      console.log('⏰ Pairing timeout (120s)');
      safeReject(new Error('Pairing timed out (120s)'));
      try { sock.end(); } catch(e) {}
    }, 120000);

    const requestCode = async () => {
      if (codeRequested) return;
      codeRequested = true;
      console.log('📞 Requesting pairing code for', phoneNumber);
      try {
        const code = await sock.requestPairingCode(phoneNumber);
        console.log('🔑 Received pairing code:', code);
        // We do NOT clear the timeout yet; wait for successful reconnection.
        const formatted = code.match(/.{1,4}/g).join('-');
        console.log('\n\x1b[32m╔═══════════════════════════════════════╗\x1b[0m');
        console.log('\x1b[32m║    🔑  PAIRING CODE READY             ║\x1b[0m');
        console.log('\x1b[32m╠═══════════════════════════════════════╣\x1b[0m');
        console.log('\x1b[33m║         ' + formatted + '              ║\x1b[0m');
        console.log('\x1b[32m╠═══════════════════════════════════════╣\x1b[0m');
        console.log('\x1b[32m║  1) Open WhatsApp                     ║\x1b[0m');
        console.log('\x1b[32m║  2) Tap ⋮ → Linked Devices            ║\x1b[0m');
        console.log('\x1b[32m║  3) Tap "Link with phone number"      ║\x1b[0m');
        console.log('\x1b[32m║  4) Enter the code above ↑            ║\x1b[0m');
        console.log('\x1b[32m╚═══════════════════════════════════════╝\x1b[0m\n');
      } catch (err) {
        console.error('❌ requestPairingCode error:', err.message);
        codeRequested = false;
        if (retries < maxRetries) {
          retries++;
          console.log(`🔄 Retrying in 5s... (attempt ${retries}/${maxRetries})`);
          setTimeout(() => {
            codeRequested = false;
            requestCode();
          }, 5000);
        } else {
          clearTimeout(giveUp);
          safeReject(new Error('Failed to get pairing code after retries'));
        }
      }
    };

    sock.ev.on('connection.update', (update) => {
      console.log('📡 connection.update in pairing:', JSON.stringify(update, null, 2));
      const { connection, lastDisconnect, qr } = update;

      if (qr && !codeRequested) {
        console.log('🖼 QR event received, requesting pairing code now');
        requestCode();
      }

      if (connection === 'open' && codeRequested) {
        // This may happen if the socket stays open after pairing (less common)
        console.log('✅ Open after code requested');
        clearTimeout(giveUp);
        safeResolve(sock);
      }

      if (connection === 'close') {
        const statusCode = lastDisconnect?.error?.output?.statusCode || 500;
        console.log('❌ Close during pairing. Status:', statusCode);

        if (statusCode === DisconnectReason.loggedOut) {
          clearTimeout(giveUp);
          console.log('❌ Logged out during pairing.');
          safeReject(new Error('Logged out'));
        } else if (codeRequested && statusCode === 515) {
          // ✅ Pairing success: server asks to restart connection.
          clearTimeout(giveUp);
          console.log('✅ Pairing successful! Restarting connection...');
          try { sock.end(); } catch(e) {}
          setTimeout(async () => {
            try {
              const newSock = await startBot();
              console.log('✅ Reconnected after pairing.');
              safeResolve(newSock);
            } catch (err) {
              console.error('❌ Failed to reconnect after pairing:', err.message);
              safeReject(err);
            }
          }, 2000);
        } else if (!codeRequested) {
          clearTimeout(giveUp);
          console.log('❌ Connection closed before pairing code requested.');
          safeReject(new Error('Connection closed before pairing'));
        }
        // If codeRequested is true but statusCode is not 515 (e.g. 503), we ignore and keep waiting.
      }
    });
  });
}
