module.exports = {
    name: 'ǫᴜᴇᴇɴ',
    description: 'ǫᴜᴇᴇɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ǫᴜᴇᴇɴ* is coming soon!' });
    }
};
