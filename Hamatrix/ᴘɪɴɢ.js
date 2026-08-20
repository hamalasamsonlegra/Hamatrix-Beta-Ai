module.exports = {
    name: 'ᴘɪɴɢ',
    description: 'ᴘɪɴɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘɪɴɢ* is coming soon!' });
    }
};
