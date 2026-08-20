module.exports = {
    name: 'ᴛɪᴋᴛᴏᴋɢɪʀʟ',
    description: 'ᴛɪᴋᴛᴏᴋɢɪʀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛɪᴋᴛᴏᴋɢɪʀʟ* is coming soon!' });
    }
};
