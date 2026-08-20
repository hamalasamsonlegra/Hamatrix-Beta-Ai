module.exports = {
    name: 'ᴀᴘᴋ',
    description: 'ᴀᴘᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴘᴋ* is coming soon!' });
    }
};
