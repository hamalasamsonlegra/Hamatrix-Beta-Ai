module.exports = {
    name: 'ᴍᴏᴏɴ',
    description: 'ᴍᴏᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴏᴏɴ* is coming soon!' });
    }
};
