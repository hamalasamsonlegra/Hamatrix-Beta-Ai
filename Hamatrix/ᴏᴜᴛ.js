module.exports = {
    name: 'ᴏᴜᴛ',
    description: 'ᴏᴜᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏᴜᴛ* is coming soon!' });
    }
};
