module.exports = {
    name: '39',
    description: 'ᴜɴʙᴀɴ39 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ39* is coming soon!' });
    }
};
