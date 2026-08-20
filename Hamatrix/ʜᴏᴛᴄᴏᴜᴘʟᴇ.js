module.exports = {
    name: 'ʜᴏᴛᴄᴏᴜᴘʟᴇ',
    description: 'ʜᴏᴛᴄᴏᴜᴘʟᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴏᴛᴄᴏᴜᴘʟᴇ* is coming soon!' });
    }
};
