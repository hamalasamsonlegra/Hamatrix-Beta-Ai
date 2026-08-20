module.exports = {
    name: 'rich',
    description: 'Send a simple rich AI response (text + suggestions)',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        try {
            const { ORich } = await import('ourin-baileys');

            const rich = new ORich(sock)
                .setTitle('Hamatrix AI')
                .setBody('Here is a summary:')
                .setFooter('Powered by Hamatrix')
                .addText('📊 *Live Stats*\nUsers: 1,200\nUptime: 99.9%\nCommands: 500+')
                .addSuggest(['Show menu', 'Help', 'Ping']);

            await rich.send(jid, { forwarded: false });
            console.log('✅ Rich AI response sent (simple)');
        } catch (e) {
            console.error('❌ Rich error:', e);
            await sock.sendMessage(jid, { text: '❌ Rich AI failed: ' + e.message });
        }
    }
};
