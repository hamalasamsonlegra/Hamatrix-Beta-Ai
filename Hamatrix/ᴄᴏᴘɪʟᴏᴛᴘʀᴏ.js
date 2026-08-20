module.exports = {
    name: 'ᴄᴏᴘɪʟᴏᴛᴘʀᴏ',
    description: 'ᴄᴏᴘɪʟᴏᴛᴘʀᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴘɪʟᴏᴛᴘʀᴏ* is coming soon!' });
    }
};
