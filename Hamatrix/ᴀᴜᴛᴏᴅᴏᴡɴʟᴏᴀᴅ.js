module.exports = {
    name: 'ᴀᴜᴛᴏᴅᴏᴡɴʟᴏᴀᴅ',
    description: 'ᴀᴜᴛᴏᴅᴏᴡɴʟᴏᴀᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴜᴛᴏᴅᴏᴡɴʟᴏᴀᴅ* is coming soon!' });
    }
};
