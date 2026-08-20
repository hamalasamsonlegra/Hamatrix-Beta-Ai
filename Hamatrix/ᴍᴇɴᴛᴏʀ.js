module.exports = {
    name: 'ᴍᴇɴᴛᴏʀ',
    description: 'ᴍᴇɴᴛᴏʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴇɴᴛᴏʀ* is coming soon!' });
    }
};
