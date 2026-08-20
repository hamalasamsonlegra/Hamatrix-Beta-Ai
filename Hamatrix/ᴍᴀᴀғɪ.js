module.exports = {
    name: 'ᴍᴀᴀғɪ',
    description: 'ᴍᴀᴀғɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴀᴀғɪ* is coming soon!' });
    }
};
