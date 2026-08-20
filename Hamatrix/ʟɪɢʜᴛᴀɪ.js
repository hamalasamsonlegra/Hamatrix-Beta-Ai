module.exports = {
    name: 'ʟɪɢʜᴛᴀɪ',
    description: 'ʟɪɢʜᴛᴀɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟɪɢʜᴛᴀɪ* is coming soon!' });
    }
};
