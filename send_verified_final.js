const { makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

const TARGETS = [
    { jid: '16505434802@s.whatsapp.net', name: 'Meta AI' },
    { jid: '15551234567@s.whatsapp.net', name: 'WhatsApp Support' }
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
            console.log('Bot connected. Sending messages...');
            for (const target of TARGETS) {
                try {
                    const sent = await sock.sendMessage(target.jid, { text: 'Hi' });
                    if (sent && sent.key && sent.key.id) {
                        console.log(`✅ Message sent to ${target.name} (${target.jid})`);
                    } else {
                        console.log(`⚠️ Could not confirm send to ${target.name}`);
                    }
                    await new Promise(r => setTimeout(r, 3000));
                } catch (e) {
                    console.log(`❌ Failed for ${target.name}: ${e.message}`);
                }
            }
            console.log('Finished. Wait 15 seconds, then restart the bot.');
            await new Promise(r => setTimeout(r, 15000));
            await sock.end();
            process.exit(0);
        }
    });
})();
