module.exports = {
    name: '44',
    description: 'ᴜɴʙᴀɴ44 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ44* is coming soon!' });
    }
};
