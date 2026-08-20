module.exports = {
    name: 'ʟʟᴀᴍᴀ',
    description: 'ʟʟᴀᴍᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟʟᴀᴍᴀ* is coming soon!' });
    }
};
