module.exports = {
    name: 'ᴅᴇᴍᴏᴛᴇ',
    description: 'ᴅᴇᴍᴏᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴇᴍᴏᴛᴇ* is coming soon!' });
    }
};
