module.exports = {
    name: 'ᴍᴀɴɢᴀ',
    description: 'ᴍᴀɴɢᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴀɴɢᴀ* is coming soon!' });
    }
};
