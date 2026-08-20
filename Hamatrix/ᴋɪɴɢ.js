module.exports = {
    name: 'ᴋɪɴɢ',
    description: 'ᴋɪɴɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋɪɴɢ* is coming soon!' });
    }
};
