module.exports = {
    name: 'ʟᴀᴠᴅᴀ',
    description: 'ʟᴀᴠᴅᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴀᴠᴅᴀ* is coming soon!' });
    }
};
