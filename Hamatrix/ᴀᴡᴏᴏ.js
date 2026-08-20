module.exports = {
    name: 'ᴀᴡᴏᴏ',
    description: 'ᴀᴡᴏᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴡᴏᴏ* is coming soon!' });
    }
};
