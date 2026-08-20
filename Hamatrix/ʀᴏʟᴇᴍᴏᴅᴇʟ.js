module.exports = {
    name: 'ʀᴏʟᴇᴍᴏᴅᴇʟ',
    description: 'ʀᴏʟᴇᴍᴏᴅᴇʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴏʟᴇᴍᴏᴅᴇʟ* is coming soon!' });
    }
};
