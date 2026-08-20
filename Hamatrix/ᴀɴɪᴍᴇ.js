module.exports = {
    name: 'ᴀɴɪᴍᴇ',
    description: 'ᴀɴɪᴍᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴɪᴍᴇ* is coming soon!' });
    }
};
