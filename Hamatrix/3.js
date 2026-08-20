module.exports = {
    name: '3',
    description: 'ʟʟᴀᴍᴀ3 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟʟᴀᴍᴀ3* is coming soon!' });
    }
};
