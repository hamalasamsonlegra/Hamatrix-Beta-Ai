module.exports = {
    name: 'ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ',
    description: 'ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ* is coming soon!' });
    }
};
