module.exports = {
    name: 'ᴍᴇɴᴜ',
    description: 'ᴍᴇɴᴜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴇɴᴜ* is coming soon!' });
    }
};
