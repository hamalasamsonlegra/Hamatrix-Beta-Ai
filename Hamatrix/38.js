module.exports = {
    name: '38',
    description: 'ᴜɴʙᴀɴ38 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ38* is coming soon!' });
    }
};
