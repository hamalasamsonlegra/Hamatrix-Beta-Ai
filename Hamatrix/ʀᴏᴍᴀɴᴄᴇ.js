module.exports = {
    name: 'ʀᴏᴍᴀɴᴄᴇ',
    description: 'ʀᴏᴍᴀɴᴄᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴏᴍᴀɴᴄᴇ* is coming soon!' });
    }
};
