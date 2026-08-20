module.exports = {
    name: 'ᴜɴʙᴀɴ',
    description: 'ᴜɴʙᴀɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ* is coming soon!' });
    }
};
