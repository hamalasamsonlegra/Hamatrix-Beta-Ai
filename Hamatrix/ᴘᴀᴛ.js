module.exports = {
    name: 'ᴘᴀᴛ',
    description: 'ᴘᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴀᴛ* is coming soon!' });
    }
};
