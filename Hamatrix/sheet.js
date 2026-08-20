module.exports = {
    name: 'sheet',
    description: 'Send a bottom sheet list (standard Baileys list message)',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        try {
            await sock.sendMessage(jid, {
                list: {
                    title: '📋 Menu',
                    buttonText: 'Open',
                    sections: [
                        {
                            title: 'General',
                            rows: [
                                { title: '🏓 Ping', rowId: 'ping', description: 'Test response' },
                                { title: '📂 Repo', rowId: 'repo', description: 'GitHub link' },
                                { title: '👤 Owner', rowId: 'owner', description: 'Contact card' }
                            ]
                        },
                        {
                            title: 'Tools',
                            rows: [
                                { title: '🌦 Weather', rowId: 'weather', description: 'Check weather' },
                                { title: '📰 News', rowId: 'news', description: 'Latest news' }
                            ]
                        }
                    ]
                }
            }, { quoted: msg });

            console.log('✅ Bottom sheet sent');
        } catch (e) {
            console.error('❌ Sheet error:', e);
            await sock.sendMessage(jid, { text: '❌ Bottom sheet failed: ' + e.message });
        }
    }
};
