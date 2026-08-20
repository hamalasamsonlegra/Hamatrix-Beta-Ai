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
                const contacts = await sock.getContacts();
                let businessCount = 0;
                for (const contact of contacts) {
                    const info = await sock.fetchBusinessProfile(contact.id).catch(() => null);
                    if (info) {
                        businessCount++;
                        console.log(`📇 ${contact.name || 'Unknown'} | ${contact.id} | Verified: ${info.isVerified || 'N/A'}`);
                    }
                }
                if (businessCount === 0) {
                    console.log('No business contacts found. Start a chat with a verified business from the linked phone.');
                }
            } catch (e) {
                console.error('Error:', e);
            }
            process.exit(0);
        }
    });
})();
