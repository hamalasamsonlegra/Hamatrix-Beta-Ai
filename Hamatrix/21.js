module.exports = {
    name: '21',
    description: 'ᴀɪ21 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɪ21* is coming soon!' });
    }
};
