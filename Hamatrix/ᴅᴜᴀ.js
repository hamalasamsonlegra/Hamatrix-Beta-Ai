module.exports = {
    name: 'ᴅᴜᴀ',
    description: 'ᴅᴜᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴜᴀ* is coming soon!' });
    }
};
