module.exports = {
    name: 'ᴀᴜᴛᴜᴍɴ',
    description: 'ᴀᴜᴛᴜᴍɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴜᴛᴜᴍɴ* is coming soon!' });
    }
};
