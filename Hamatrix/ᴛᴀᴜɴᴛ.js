module.exports = {
    name: 'ᴛᴀᴜɴᴛ',
    description: 'ᴛᴀᴜɴᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀᴜɴᴛ* is coming soon!' });
    }
};
