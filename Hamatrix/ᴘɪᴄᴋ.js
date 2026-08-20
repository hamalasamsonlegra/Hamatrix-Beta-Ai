module.exports = {
    name: 'ᴘɪᴄᴋ',
    description: 'ᴘɪᴄᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘɪᴄᴋ* is coming soon!' });
    }
};
