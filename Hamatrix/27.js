module.exports = {
    name: '27',
    description: 'ᴜɴʙᴀɴ27 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ27* is coming soon!' });
    }
};
