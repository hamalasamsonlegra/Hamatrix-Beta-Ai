module.exports = {
    name: 'ᴀᴛᴛʀᴀᴄᴛɪᴏɴ',
    description: 'ᴀᴛᴛʀᴀᴄᴛɪᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴛᴛʀᴀᴄᴛɪᴏɴ* is coming soon!' });
    }
};
