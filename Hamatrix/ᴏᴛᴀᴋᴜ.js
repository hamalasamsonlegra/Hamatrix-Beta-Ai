module.exports = {
    name: 'ᴏᴛᴀᴋᴜ',
    description: 'ᴏᴛᴀᴋᴜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏᴛᴀᴋᴜ* is coming soon!' });
    }
};
