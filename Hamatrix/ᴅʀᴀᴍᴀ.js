module.exports = {
    name: 'ᴅʀᴀᴍᴀ',
    description: 'ᴅʀᴀᴍᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅʀᴀᴍᴀ* is coming soon!' });
    }
};
