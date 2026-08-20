module.exports = {
    name: 'ᴘʀɪᴠᴀᴛᴇ',
    description: 'ᴘʀɪᴠᴀᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘʀɪᴠᴀᴛᴇ* is coming soon!' });
    }
};
