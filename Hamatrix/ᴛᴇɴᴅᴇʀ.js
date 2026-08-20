module.exports = {
    name: 'ᴛᴇɴᴅᴇʀ',
    description: 'ᴛᴇɴᴅᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴇɴᴅᴇʀ* is coming soon!' });
    }
};
