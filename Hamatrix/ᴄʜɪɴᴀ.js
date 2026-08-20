module.exports = {
    name: 'ᴄʜɪɴᴀ',
    description: 'ᴄʜɪɴᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜɪɴᴀ* is coming soon!' });
    }
};
