const readline = require('readline');
const pino = require('pino');
const { SESSION_DIR } = require('../config.js');
const { deleteSession } = require('./session.js');
const { startBot } = require('./hamatrix.js');
const { getBaileysVersion } = require('./version-cache.js');

const logger = pino({ level: 'silent' });

function askNumber() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question('📱 Enter your WhatsApp number (no +, spaces): ', (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function pairDevice() {
  let phoneNumber = '';
  while (!/^\d{10,15}$/.test(phoneNumber)) {
    phoneNumber = await askNumber();
    if (!/^\d{10,15}$/.test(phoneNumber)) {
      console.log('❌ Invalid number. Try again.');
    }
  }

  deleteSession();

  const {
    makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeCacheableSignalKeyStore,
    Browsers
  } = await import('ourin-baileys');

  const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR);
  const version = await getBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger)
    },
    logger,
    browser: Browsers.macOS('Safari'),
    printQRInTerminal: false,
    markOnlineOnConnect: false,
    syncFullHistory: false,
    generateHighQualityLinkPreview: false,
    keepAliveIntervalMs: 25000,
    retryRequestDelayMs: 1500,
    connectTimeoutMs: 120000,
    defaultQueryTimeoutMs: 20000
  });

  sock.ev.on('creds.update', saveCreds);

  return new Promise(async (resolve, reject) => {
    let codeRequested = false;
    let retries = 0;
    const maxRetries = 2;
    let resolved = false;
    const safeResolve = (val) => { if (!resolved) { resolved = true; resolve(val); } };
    const safeReject = (err) => { if (!resolved) { resolved = true; reject(err); } };

    const giveUp = setTimeout(() => {
      safeReject(new Error('Pairing timed out (120s)'));
      try { sock.end(); } catch(e) {}
    }, 120000);

    const requestCode = async () => {
      if (codeRequested) return;
      codeRequested = true;
      try {
        const code = await sock.requestPairingCode(phoneNumber);
        console.log('\n🔑 Pairing Code: ' + code.match(/.{1,4}/g).join('-'));
        console.log('📱 Open WhatsApp → Linked Devices → Link with phone number');
        console.log('   Enter the code above.\n');
      } catch (err) {
        console.error('❌ Pairing code request failed:', err.message);
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
      const { connection, lastDisconnect, qr } = update;

      if (qr && !codeRequested) {
        requestCode();
      }

      if (connection === 'close') {
        const statusCode = lastDisconnect?.error?.output?.statusCode || 500;
        if (statusCode === DisconnectReason.loggedOut) {
          clearTimeout(giveUp);
          console.log('❌ Logged out during pairing.');
          safeReject(new Error('Logged out'));
        } else if (codeRequested && statusCode === 515) {
          clearTimeout(giveUp);
          console.log('✅ Pairing successful! Restarting connection...');
          try { sock.end(); } catch(e) {}
          setTimeout(async () => {
            try {
              const newSock = await startBot();
              safeResolve(newSock);
            } catch (err) {
              safeReject(err);
            }
          }, 2000);
        } else if (!codeRequested) {
          clearTimeout(giveUp);
          console.log('❌ Connection closed before pairing code requested.');
          safeReject(new Error('Connection closed before pairing'));
        }
      }

      if (connection === 'open' && codeRequested) {
        clearTimeout(giveUp);
        safeResolve(sock);
      }
    });
  });
}

module.exports = { pairDevice };
