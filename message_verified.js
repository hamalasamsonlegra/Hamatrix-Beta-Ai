const { makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

const JIDS = [
    '16505434802@s.whatsapp.net',   // Meta AI
    '15551234567@s.whatsapp.net',   // WhatsApp Support
    '31612345678@s.whatsapp.net',   // KLM
    '27860012345@s.whatsapp.net',   // Absa
    '919860123456@s.whatsapp.net',  // HDFC
    '14155238886@s.whatsapp.net'    // WhatsApp Business (test)
];

(async () => {
    const { state } = await useMultiFileAuthState('./sessions/main');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        browser: ['Ubuntu', 'Chrome', '20.0.0']
    });

    sock.ev.on('connection.update', async (update) => {
        if (update.connection === 'open') {
            for (const jid of JIDS) {
                try {
                    await sock.sendMessage(jid, { text: 'Hi' });
                    console.log(`✅ Sent to ${jid}`);
                    await new Promise(r => setTimeout(r, 2000)); // small delay
                } catch (e) {
                    console.log(`❌ Failed for ${jid}: ${e.message}`);
                }
            }
            console.log('Done. Restart the bot.');
            process.exit(0);
        }
    });
})();
