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

const logger = pino({ level: 'debug' });  // ← debug level

export async function startBot() {
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
    printQRInTerminal: true,   // ← show QR in terminal for now
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

  sock.ev.on('connection.update', (update) => {
    console.log('📡 connection.update:', JSON.stringify(update, null, 2));
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('🖼 QR code received, length:', qr.length);
    }

    if (connection === 'close') {
      const statusCode = lastDisconnect?.error?.output?.statusCode || 500;
      console.log('❌ Connection closed. Status code:', statusCode);
      if (statusCode === DisconnectReason.loggedOut) {
        console.log('❌ Session logged out. Deleting session...');
        deleteSession();
        setTimeout(() => process.exit(0), 2000);
      } else {
        const delay = 3000 + Math.floor(Math.random() * 6000);
        console.log(`🔄 Reconnecting in ${delay}ms...`);
        setTimeout(() => startBot(), delay);
      }
    } else if (connection === 'open') {
      console.log('✅ Bot connected.\n');
    }
  });

  return sock;
}

export async function sendText(sock, jid, text) {
  return sock.sendMessage(jid, { text });
}

export function onMessages(sock, handler) {
  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;
    if (msg.key.remoteJid === 'status@broadcast') return;

    let text = '';
    if (msg.message.conversation) text = msg.message.conversation;
    else if (msg.message.extendedTextMessage?.text) text = msg.message.extendedTextMessage.text;
    else if (msg.message.imageCaption) text = msg.message.imageCaption;
    else if (msg.message.videoMessage?.caption) text = msg.message.videoMessage.caption;

    if (text) {
      await handler({ sock, msg, text, jid: msg.key.remoteJid });
    }
  });
}
