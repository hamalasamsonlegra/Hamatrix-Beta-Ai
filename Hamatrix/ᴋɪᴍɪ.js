module.exports = {
    name: 'ᴋɪᴍɪ',
    description: 'ᴋɪᴍɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋɪᴍɪ* is coming soon!' });
    }
};
