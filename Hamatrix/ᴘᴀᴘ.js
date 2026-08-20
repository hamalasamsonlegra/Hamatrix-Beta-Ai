module.exports = {
    name: 'ᴘᴀᴘ',
    description: 'ᴘᴀᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴀᴘ* is coming soon!' });
    }
};
