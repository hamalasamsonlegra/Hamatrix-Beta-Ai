module.exports = {
    name: 'ᴡɪɴᴋ',
    description: 'ᴡɪɴᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡɪɴᴋ* is coming soon!' });
    }
};
