module.exports = {
    name: 'ᴊᴀᴘᴀɴ',
    description: 'ᴊᴀᴘᴀɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴊᴀᴘᴀɴ* is coming soon!' });
    }
};
