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

            // Get all function names on the socket
            const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(sock))
                .filter(name => typeof sock[name] === 'function');

            // Show only those related to interactive messages
            const relevant = methods.filter(m =>
                m.toLowerCase().includes('list') ||
                m.toLowerCase().includes('carousel') ||
                m.toLowerCase().includes('interactive')
            );
            console.log('\n🔍 Methods containing list/carousel/interactive:');
            console.log(relevant.length ? relevant.join('\n') : 'None found. Showing all methods:');
            if (!relevant.length) console.log(methods.sort().join('\n'));

            await sock.end();
            process.exit(0);
        }
    });
})();
