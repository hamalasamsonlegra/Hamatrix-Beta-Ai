module.exports = {
    name: 'ᴡᴀᴠᴇ',
    description: 'ᴡᴀᴠᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴀᴠᴇ* is coming soon!' });
    }
};
