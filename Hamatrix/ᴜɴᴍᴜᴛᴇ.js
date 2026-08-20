module.exports = {
    name: 'ᴜɴᴍᴜᴛᴇ',
    description: 'ᴜɴᴍᴜᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴᴍᴜᴛᴇ* is coming soon!' });
    }
};
