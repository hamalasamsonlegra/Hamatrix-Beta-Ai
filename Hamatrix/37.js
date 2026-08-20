module.exports = {
    name: '37',
    description: 'ᴜɴʙᴀɴ37 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ37* is coming soon!' });
    }
};
