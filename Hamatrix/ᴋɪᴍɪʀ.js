module.exports = {
    name: 'ᴋɪᴍɪʀ',
    description: 'ᴋɪᴍɪʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋɪᴍɪʀ* is coming soon!' });
    }
};
