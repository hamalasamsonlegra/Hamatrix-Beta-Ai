module.exports = {
    name: 'ᴀʟɪᴠᴇ',
    description: 'ᴀʟɪᴠᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀʟɪᴠᴇ* is coming soon!' });
    }
};
