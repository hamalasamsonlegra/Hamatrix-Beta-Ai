module.exports = {
    name: 'ᴘʜɪ',
    description: 'ᴘʜɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘʜɪ* is coming soon!' });
    }
};
