module.exports = {
    name: '24',
    description: 'ᴜɴʙᴀɴ24 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ24* is coming soon!' });
    }
};
