module.exports = {
    name: 'ᴊᴀᴀɴ',
    description: 'ᴊᴀᴀɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴊᴀᴀɴ* is coming soon!' });
    }
};
