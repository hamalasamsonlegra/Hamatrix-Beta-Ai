module.exports = {
    name: 'ᴛᴀɢ',
    description: 'ᴛᴀɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀɢ* is coming soon!' });
    }
};
