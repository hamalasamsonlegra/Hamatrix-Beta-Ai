module.exports = {
    name: 'ǫᴜᴏᴛᴇ',
    description: 'ǫᴜᴏᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ǫᴜᴏᴛᴇ* is coming soon!' });
    }
};
