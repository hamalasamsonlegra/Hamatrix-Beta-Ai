module.exports = {
    name: 'ᴡʜᴀᴛᴀɴɪᴍᴀʟ',
    description: 'ᴡʜᴀᴛᴀɴɪᴍᴀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡʜᴀᴛᴀɴɪᴍᴀʟ* is coming soon!' });
    }
};
