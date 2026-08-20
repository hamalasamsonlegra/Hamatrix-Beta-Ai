module.exports = {
    name: '41',
    description: 'ᴜɴʙᴀɴ41 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ41* is coming soon!' });
    }
};
