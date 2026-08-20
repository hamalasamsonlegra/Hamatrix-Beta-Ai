module.exports = {
    name: 'ɴɪɴᴊᴀ',
    description: 'ɴɪɴᴊᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴɪɴᴊᴀ* is coming soon!' });
    }
};
