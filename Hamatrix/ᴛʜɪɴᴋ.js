module.exports = {
    name: 'ᴛʜɪɴᴋ',
    description: 'ᴛʜɪɴᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛʜɪɴᴋ* is coming soon!' });
    }
};
