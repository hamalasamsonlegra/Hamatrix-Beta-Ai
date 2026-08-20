module.exports = {
    name: 'ᴋɪᴄᴋ',
    description: 'ᴋɪᴄᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋɪᴄᴋ* is coming soon!' });
    }
};
