module.exports = {
    name: 'ɪɴᴛᴇʀᴠɪᴇᴡ',
    description: 'ɪɴᴛᴇʀᴠɪᴇᴡ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪɴᴛᴇʀᴠɪᴇᴡ* is coming soon!' });
    }
};
