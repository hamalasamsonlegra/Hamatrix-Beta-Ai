module.exports = {
    name: 'ᴡᴀɪᴛɪɴɢʀᴏᴏᴍ',
    description: 'ᴡᴀɪᴛɪɴɢʀᴏᴏᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴀɪᴛɪɴɢʀᴏᴏᴍ* is coming soon!' });
    }
};
