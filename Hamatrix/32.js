module.exports = {
    name: '32',
    description: 'ᴜɴʙᴀɴ32 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ32* is coming soon!' });
    }
};
