module.exports = {
    name: '45',
    description: 'ᴜɴʙᴀɴ45 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ45* is coming soon!' });
    }
};
