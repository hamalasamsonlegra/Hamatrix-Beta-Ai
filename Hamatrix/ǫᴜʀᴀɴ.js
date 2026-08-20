module.exports = {
    name: 'ǫᴜʀᴀɴ',
    description: 'ǫᴜʀᴀɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ǫᴜʀᴀɴ* is coming soon!' });
    }
};
