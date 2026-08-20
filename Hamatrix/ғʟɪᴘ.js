module.exports = {
    name: 'ғʟɪᴘ',
    description: 'ғʟɪᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ғʟɪᴘ* is coming soon!' });
    }
};
