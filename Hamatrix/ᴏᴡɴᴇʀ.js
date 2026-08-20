module.exports = {
    name: 'ᴏᴡɴᴇʀ',
    description: 'ᴏᴡɴᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏᴡɴᴇʀ* is coming soon!' });
    }
};
