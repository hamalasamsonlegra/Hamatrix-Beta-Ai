module.exports = {
    name: 'ᴠᴠ',
    description: 'ᴠᴠ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴠᴠ* is coming soon!' });
    }
};
