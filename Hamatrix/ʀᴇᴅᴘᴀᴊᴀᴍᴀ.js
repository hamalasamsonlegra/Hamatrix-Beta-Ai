module.exports = {
    name: 'ʀᴇᴅᴘᴀᴊᴀᴍᴀ',
    description: 'ʀᴇᴅᴘᴀᴊᴀᴍᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴅᴘᴀᴊᴀᴍᴀ* is coming soon!' });
    }
};
