module.exports = {
    name: 'ᴋɪʟʟ',
    description: 'ᴋɪʟʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋɪʟʟ* is coming soon!' });
    }
};
