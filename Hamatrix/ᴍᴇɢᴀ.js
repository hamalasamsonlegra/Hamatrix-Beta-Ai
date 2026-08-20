module.exports = {
    name: 'ᴍᴇɢᴀ',
    description: 'ᴍᴇɢᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴇɢᴀ* is coming soon!' });
    }
};
