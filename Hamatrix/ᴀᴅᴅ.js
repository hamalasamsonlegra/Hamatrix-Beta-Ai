module.exports = {
    name: 'ᴀᴅᴅ',
    description: 'ᴀᴅᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴅᴅ* is coming soon!' });
    }
};
