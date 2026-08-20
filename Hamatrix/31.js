module.exports = {
    name: '31',
    description: 'ᴜɴʙᴀɴ31 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ31* is coming soon!' });
    }
};
