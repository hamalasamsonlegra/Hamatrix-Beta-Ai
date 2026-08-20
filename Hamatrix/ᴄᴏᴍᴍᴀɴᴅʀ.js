module.exports = {
    name: 'ᴄᴏᴍᴍᴀɴᴅʀ',
    description: 'ᴄᴏᴍᴍᴀɴᴅʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴍᴍᴀɴᴅʀ* is coming soon!' });
    }
};
