module.exports = {
    name: 'ɴɪɢʜᴛᴏᴡʟ',
    description: 'ɴɪɢʜᴛᴏᴡʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴɪɢʜᴛᴏᴡʟ* is coming soon!' });
    }
};
