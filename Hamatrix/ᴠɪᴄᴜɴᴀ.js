module.exports = {
    name: 'ᴠɪᴄᴜɴᴀ',
    description: 'ᴠɪᴄᴜɴᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴠɪᴄᴜɴᴀ* is coming soon!' });
    }
};
