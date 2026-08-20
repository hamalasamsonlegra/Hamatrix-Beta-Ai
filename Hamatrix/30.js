module.exports = {
    name: '30',
    description: 'ᴜɴʙᴀɴ30 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ30* is coming soon!' });
    }
};
