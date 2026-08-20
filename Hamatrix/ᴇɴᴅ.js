module.exports = {
    name: 'ᴇɴᴅ',
    description: 'ᴇɴᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇɴᴅ* is coming soon!' });
    }
};
