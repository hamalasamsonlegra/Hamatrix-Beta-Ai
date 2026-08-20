module.exports = {
    name: 'ᴍᴏᴅᴀᴘᴋ',
    description: 'ᴍᴏᴅᴀᴘᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴏᴅᴀᴘᴋ* is coming soon!' });
    }
};
