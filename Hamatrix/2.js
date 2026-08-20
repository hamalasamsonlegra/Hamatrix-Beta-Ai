module.exports = {
    name: '2',
    description: 'ʟʟᴀᴍᴀ2 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟʟᴀᴍᴀ2* is coming soon!' });
    }
};
