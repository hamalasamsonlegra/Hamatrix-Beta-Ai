module.exports = {
    name: 'ᴀᴜʀᴀ',
    description: 'ᴀᴜʀᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴜʀᴀ* is coming soon!' });
    }
};
