module.exports = {
    name: 'ᴘʀᴏᴜᴅ',
    description: 'ᴘʀᴏᴜᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘʀᴏᴜᴅ* is coming soon!' });
    }
};
