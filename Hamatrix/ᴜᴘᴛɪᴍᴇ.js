module.exports = {
    name: 'ᴜᴘᴛɪᴍᴇ',
    description: 'ᴜᴘᴛɪᴍᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜᴘᴛɪᴍᴇ* is coming soon!' });
    }
};
