module.exports = {
    name: 'ʙᴏᴛɴᴀᴍᴇ',
    description: 'ʙᴏᴛɴᴀᴍᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏᴛɴᴀᴍᴇ* is coming soon!' });
    }
};
