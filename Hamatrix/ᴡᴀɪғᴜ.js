module.exports = {
    name: 'ᴡᴀɪғᴜ',
    description: 'ᴡᴀɪғᴜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴀɪғᴜ* is coming soon!' });
    }
};
