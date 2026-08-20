module.exports = {
    name: 'ǫᴡᴇɴ',
    description: 'ǫᴡᴇɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ǫᴡᴇɴ* is coming soon!' });
    }
};
