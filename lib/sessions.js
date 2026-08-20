'use strict';
var makeWASocket = require('@whiskeysockets/baileys').default;
var { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, Browsers } = require('@whiskeysockets/baileys');
var pino = require('pino');
var fs = require('fs');
var path = require('path');

var logger = pino({ level: 'silent' });

// Session folder inside the repo (so it can be pushed to GitHub)
var SESSIONS_DIR = path.join(__dirname, '..', 'sessions');
if (!fs.existsSync(SESSIONS_DIR)) fs.mkdirSync(SESSIONS_DIR, { recursive: true });

function socketOptions(version, authState) {
  return {
    version: version,
    auth: { creds: authState.state.creds, keys: makeCacheableSignalKeyStore(authState.state.keys, logger) },
    printQRInTerminal: false,
    browser: Browsers.macOS('Safari'),
    logger: logger,
    keepAliveIntervalMs: 25000,
    connectTimeoutMs: 120000,
    markOnlineOnConnect: false,
    syncFullHistory: false,
  };
}

async function pairDevice(sessionName, phoneNumber) {
  var sessionPath = path.join(SESSIONS_DIR, sessionName);
  if (fs.existsSync(sessionPath)) fs.rmSync(sessionPath, { recursive: true, force: true });
  fs.mkdirSync(sessionPath, { recursive: true });

  var cleaned = phoneNumber.replace(/[^0-9]/g, '');
  if (cleaned.length < 7) { console.log('\x1b[31m[!] Invalid number.\x1b[0m'); return null; }

  var pairCode = await new Promise(async function(resolve) {
    var codeRequested = false, resolved = false;
    function safeResolve(val) { if (!resolved) { resolved = true; resolve(val); } }
    var giveUp = setTimeout(function() { safeResolve(null); }, 90000);
    var authState = await useMultiFileAuthState(sessionPath);
    var ver = await fetchLatestBaileysVersion();
    var sock = makeWASocket(socketOptions(ver.version, authState));
    sock.ev.on('creds.update', authState.saveCreds);
    sock.ev.on('connection.update', async function(update) {
      if (update.qr && !codeRequested) {
        codeRequested = true;
        try {
          var code = await sock.requestPairingCode(cleaned);
          var formatted = code.match(/.{1,4}/g).join('-');
          clearTimeout(giveUp);
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
          safeResolve(formatted);
        } catch (e) { clearTimeout(giveUp); safeResolve(null); }
      }
      if (update.connection === 'open' && codeRequested) {
        // Pairing succeeded – close the socket, session is saved
        try { sock.end(); } catch(e) {}
      }
      if (update.connection === 'close' && codeRequested) {
        try { sock.end(); } catch(e) {}
        clearTimeout(giveUp);
        safeResolve('done');  // already resolved, but just in case
      }
    });
  });

  return pairCode || null;
}

module.exports = { pairDevice };
