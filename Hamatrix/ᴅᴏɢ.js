module.exports = {
    name: 'ᴅᴏɢ',
    description: 'ᴅᴏɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴏɢ* is coming soon!' });
    }
};
