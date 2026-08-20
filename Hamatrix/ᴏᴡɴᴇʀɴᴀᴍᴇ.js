module.exports = {
    name: 'ᴏᴡɴᴇʀɴᴀᴍᴇ',
    description: 'ᴏᴡɴᴇʀɴᴀᴍᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏᴡɴᴇʀɴᴀᴍᴇ* is coming soon!' });
    }
};
