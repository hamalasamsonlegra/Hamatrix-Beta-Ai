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
            console.log('Connected! Following channel...');
            try {
                // Replace with your exact channel JID
                const channelJid = '0029Vb8fAvuIXnltjmHYm31j@newsletter';
                await sock.newsletterFollow(channelJid);
                console.log('✅ Successfully followed the channel!');
            } catch (e) {
                console.error('Failed to follow:', e);
            }
            process.exit(0);
        }
    });
})();
