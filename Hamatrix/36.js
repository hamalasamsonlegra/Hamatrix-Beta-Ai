module.exports = {
    name: '36',
    description: 'ᴜɴʙᴀɴ36 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ36* is coming soon!' });
    }
};
