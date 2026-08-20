module.exports = {
    name: 'ᴘʀᴏᴍᴏᴛᴇ',
    description: 'ᴘʀᴏᴍᴏᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘʀᴏᴍᴏᴛᴇ* is coming soon!' });
    }
};
