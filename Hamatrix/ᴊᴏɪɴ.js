module.exports = {
    name: 'ᴊᴏɪɴ',
    description: 'ᴊᴏɪɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴊᴏɪɴ* is coming soon!' });
    }
};
