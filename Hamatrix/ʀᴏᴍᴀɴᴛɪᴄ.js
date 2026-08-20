module.exports = {
    name: 'ʀᴏᴍᴀɴᴛɪᴄ',
    description: 'ʀᴏᴍᴀɴᴛɪᴄ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴏᴍᴀɴᴛɪᴄ* is coming soon!' });
    }
};
