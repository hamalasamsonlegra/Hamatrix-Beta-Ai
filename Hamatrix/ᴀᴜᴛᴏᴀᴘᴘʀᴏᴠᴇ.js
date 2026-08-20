module.exports = {
    name: 'ᴀᴜᴛᴏᴀᴘᴘʀᴏᴠᴇ',
    description: 'ᴀᴜᴛᴏᴀᴘᴘʀᴏᴠᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴜᴛᴏᴀᴘᴘʀᴏᴠᴇ* is coming soon!' });
    }
};
