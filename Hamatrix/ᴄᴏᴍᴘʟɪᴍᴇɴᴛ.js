module.exports = {
    name: 'ᴄᴏᴍᴘʟɪᴍᴇɴᴛ',
    description: 'ᴄᴏᴍᴘʟɪᴍᴇɴᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴍᴘʟɪᴍᴇɴᴛ* is coming soon!' });
    }
};
