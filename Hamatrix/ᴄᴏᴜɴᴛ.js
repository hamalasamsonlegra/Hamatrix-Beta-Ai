module.exports = {
    name: 'ᴄᴏᴜɴᴛ',
    description: 'ᴄᴏᴜɴᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴜɴᴛ* is coming soon!' });
    }
};
