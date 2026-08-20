module.exports = {
    name: 'ᴄʜᴀᴛᴘᴀᴛᴀ',
    description: 'ᴄʜᴀᴛᴘᴀᴛᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴀᴛᴘᴀᴛᴀ* is coming soon!' });
    }
};
