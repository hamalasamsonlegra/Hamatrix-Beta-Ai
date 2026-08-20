module.exports = {
    name: 'ʜᴏᴛᴅᴘ',
    description: 'ʜᴏᴛᴅᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴏᴛᴅᴘ* is coming soon!' });
    }
};
