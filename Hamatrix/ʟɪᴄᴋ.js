module.exports = {
    name: 'ʟɪᴄᴋ',
    description: 'ʟɪᴄᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟɪᴄᴋ* is coming soon!' });
    }
};
