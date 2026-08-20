module.exports = {
    name: 'ᴄᴏᴘɪʟᴏᴛ',
    description: 'ᴄᴏᴘɪʟᴏᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴘɪʟᴏᴛ* is coming soon!' });
    }
};
