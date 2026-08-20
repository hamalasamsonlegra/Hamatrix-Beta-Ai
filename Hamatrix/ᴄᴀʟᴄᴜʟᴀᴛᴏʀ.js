module.exports = {
    name: 'ᴄᴀʟᴄᴜʟᴀᴛᴏʀ',
    description: 'ᴄᴀʟᴄᴜʟᴀᴛᴏʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴀʟᴄᴜʟᴀᴛᴏʀ* is coming soon!' });
    }
};
