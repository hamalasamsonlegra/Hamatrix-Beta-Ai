module.exports = {
    name: 'ᴀᴅᴍɪɴᴀᴄᴛɪᴏɴ',
    description: 'ᴀᴅᴍɪɴᴀᴄᴛɪᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴅᴍɪɴᴀᴄᴛɪᴏɴ* is coming soon!' });
    }
};
