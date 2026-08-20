module.exports = {
    name: 'ᴄᴀᴘᴛɪᴠᴀᴛᴇ',
    description: 'ᴄᴀᴘᴛɪᴠᴀᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴀᴘᴛɪᴠᴀᴛᴇ* is coming soon!' });
    }
};
