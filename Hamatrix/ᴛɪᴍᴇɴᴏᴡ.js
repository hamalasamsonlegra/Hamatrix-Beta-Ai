module.exports = {
    name: 'ᴛɪᴍᴇɴᴏᴡ',
    description: 'ᴛɪᴍᴇɴᴏᴡ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛɪᴍᴇɴᴏᴡ* is coming soon!' });
    }
};
