module.exports = {
    name: 'ᴍᴀɢɪᴄᴀʟ',
    description: 'ᴍᴀɢɪᴄᴀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴀɢɪᴄᴀʟ* is coming soon!' });
    }
};
