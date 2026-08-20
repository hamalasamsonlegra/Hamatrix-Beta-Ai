module.exports = {
    name: 'ʀᴇᴀᴅᴍᴏʀᴇ',
    description: 'ʀᴇᴀᴅᴍᴏʀᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴀᴅᴍᴏʀᴇ* is coming soon!' });
    }
};
