module.exports = {
    name: 'ᴍᴏᴅᴇ',
    description: 'ᴍᴏᴅᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴏᴅᴇ* is coming soon!' });
    }
};
