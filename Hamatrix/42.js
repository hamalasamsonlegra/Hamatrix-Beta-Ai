module.exports = {
    name: '42',
    description: 'ᴜɴʙᴀɴ42 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ42* is coming soon!' });
    }
};
