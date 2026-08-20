module.exports = {
    name: 'ᴍᴏᴜɴᴛᴀɪɴ',
    description: 'ᴍᴏᴜɴᴛᴀɪɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴏᴜɴᴛᴀɪɴ* is coming soon!' });
    }
};
