module.exports = {
    name: 'ᴠɪɴᴛᴀɢᴇ',
    description: 'ᴠɪɴᴛᴀɢᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴠɪɴᴛᴀɢᴇ* is coming soon!' });
    }
};
