module.exports = {
    name: 'ɪɴғᴀᴛᴜᴀᴛɪᴏɴ',
    description: 'ɪɴғᴀᴛᴜᴀᴛɪᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪɴғᴀᴛᴜᴀᴛɪᴏɴ* is coming soon!' });
    }
};
