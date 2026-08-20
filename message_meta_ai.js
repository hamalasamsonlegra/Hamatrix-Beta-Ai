const { makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

(async () => {
    const { state } = await useMultiFileAuthState('./sessions/main');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        browser: ['Ubuntu', 'Chrome', '20.0.0']
    });

    sock.ev.on('connection.update', async (update) => {
        if (update.connection === 'open') {
            try {
                await sock.sendMessage('16505434802@s.whatsapp.net', { text: 'Hi Meta AI' });
                console.log('✅ Message sent to Meta AI. Wait 5 seconds, then restart the bot.');
                await new Promise(r => setTimeout(r, 5000));
                await sock.end();
                process.exit(0);
            } catch (e) {
                console.error('Failed:', e);
                process.exit(1);
            }
        }
    });
})();
