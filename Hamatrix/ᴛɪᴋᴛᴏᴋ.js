module.exports = {
    name: 'ᴛɪᴋᴛᴏᴋ',
    description: 'ᴛɪᴋᴛᴏᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛɪᴋᴛᴏᴋ* is coming soon!' });
    }
};
