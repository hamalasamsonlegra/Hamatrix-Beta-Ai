module.exports = {
    name: 'ᴛᴀᴊ',
    description: 'ᴛᴀᴊ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀᴊ* is coming soon!' });
    }
};
