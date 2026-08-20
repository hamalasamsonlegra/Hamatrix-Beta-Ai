module.exports = {
    name: 'ᴍᴜᴛᴇ',
    description: 'ᴍᴜᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴜᴛᴇ* is coming soon!' });
    }
};
