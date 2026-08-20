const { sessionExists } = require('./lib/session.js');
const { pairDevice } = require('./lib/pairing.js');
const { startBot, onMessages } = require('./lib/hamatrix.js');
const hamatrixHandler = require('./hamatrixHandler.js');
const { startWebServer } = require('./web.js');
const OWNER_JID = process.env.OWNER_JID || require('./config.js').OWNER_JID;

async function main() {
  console.clear();
  console.log('?? Hamatrix WhatsApp Bot\n');

  let sock;
  if (!sessionExists()) {
    console.log('No paired device found. Starting pairing...\n');
    sock = await pairDevice();
  } else {
    console.log('Session found. Starting bot...\n');
    sock = await startBot();
  }

  hamatrixHandler.enhanceSock(sock);

  onMessages(sock, async ({ msg }) => {
    await hamatrixHandler.handleMessage(sock, msg);
  });

  try {
    const { port, password } = startWebServer(sock, OWNER_JID);
    const publicIp = process.env.DASHBOARD_URL || 'localhost';
    const dashboardUrl = `http://${publicIp}:${port}`;  // login page, password sent separately
    if (OWNER_JID) {
      await sock.sendMessage(OWNER_JID, {
        text: `?? *HAMATRIX DASHBOARD*\n\n?? Link: ${dashboardUrl}\n?? Password: ${password}\n\n_Keep this safe. Use the login page._`
      });
    }
  } catch (e) {
    console.error('Dashboard error:', e.message);
  }

  console.log('? Bot is ready. Send *menu* or *.menu* in WhatsApp.\n');
}

main().catch(err => {
  console.error('? Fatal error:', err.message);
  process.exit(1);
});

