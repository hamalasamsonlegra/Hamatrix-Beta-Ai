module.exports = {
    name: '25',
    description: 'ᴜɴʙᴀɴ25 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ25* is coming soon!' });
    }
};
