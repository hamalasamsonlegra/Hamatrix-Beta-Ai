module.exports = {
    name: 'ᴍᴀɪᴅ',
    description: 'ᴍᴀɪᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴀɪᴅ* is coming soon!' });
    }
};
