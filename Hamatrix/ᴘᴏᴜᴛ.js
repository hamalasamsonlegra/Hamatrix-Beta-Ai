module.exports = {
    name: 'ᴘᴏᴜᴛ',
    description: 'ᴘᴏᴜᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴏᴜᴛ* is coming soon!' });
    }
};
