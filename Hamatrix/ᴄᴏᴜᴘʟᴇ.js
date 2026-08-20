module.exports = {
    name: 'ᴄᴏᴜᴘʟᴇ',
    description: 'ᴄᴏᴜᴘʟᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴜᴘʟᴇ* is coming soon!' });
    }
};
