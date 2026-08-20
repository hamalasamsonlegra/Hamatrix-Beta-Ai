module.exports = {
    name: 'ǫᴀᴅʀ',
    description: 'ǫᴀᴅʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ǫᴀᴅʀ* is coming soon!' });
    }
};
