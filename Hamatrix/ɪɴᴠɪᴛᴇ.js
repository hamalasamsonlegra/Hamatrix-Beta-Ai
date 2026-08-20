module.exports = {
    name: 'ɪɴᴠɪᴛᴇ',
    description: 'ɪɴᴠɪᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪɴᴠɪᴛᴇ* is coming soon!' });
    }
};
