module.exports = {
    name: 'ᴛᴀɪʟ',
    description: 'ᴛᴀɪʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀɪʟ* is coming soon!' });
    }
};
