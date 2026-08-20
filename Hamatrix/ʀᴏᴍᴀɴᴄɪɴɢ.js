module.exports = {
    name: 'ʀᴏᴍᴀɴᴄɪɴɢ',
    description: 'ʀᴏᴍᴀɴᴄɪɴɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴏᴍᴀɴᴄɪɴɢ* is coming soon!' });
    }
};
