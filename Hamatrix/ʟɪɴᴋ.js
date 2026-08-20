module.exports = {
    name: 'ʟɪɴᴋ',
    description: 'ʟɪɴᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟɪɴᴋ* is coming soon!' });
    }
};
