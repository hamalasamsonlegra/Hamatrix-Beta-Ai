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
            console.log('Connected!');

            // All own property names (including functions added directly to the socket)
            const keys = Object.keys(sock);
            console.log('\n🔍 Socket own properties:');
            console.log(keys.join('\n'));

            // Look specifically for interactive/list/carousel-related keys
            const relevant = keys.filter(k =>
                k.toLowerCase().includes('list') ||
                k.toLowerCase().includes('carousel') ||
                k.toLowerCase().includes('interactive')
            );
            console.log('\n📋 Interactive-related properties:');
            console.log(relevant.length ? relevant.join('\n') : 'None found explicitly. Checking for any sendX function...');

            // Also check functions by type
            const functions = keys.filter(k => typeof sock[k] === 'function');
            console.log('\n⚙️ All functions on socket:');
            console.log(functions.join('\n'));

            await sock.end();
            process.exit(0);
        }
    });
})();
