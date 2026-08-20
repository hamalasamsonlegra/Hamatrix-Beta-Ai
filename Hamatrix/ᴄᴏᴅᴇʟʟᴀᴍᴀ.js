module.exports = {
    name: 'ᴄᴏᴅᴇʟʟᴀᴍᴀ',
    description: 'ᴄᴏᴅᴇʟʟᴀᴍᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴅᴇʟʟᴀᴍᴀ* is coming soon!' });
    }
};
