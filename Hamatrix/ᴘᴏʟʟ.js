module.exports = {
    name: 'ᴘᴏʟʟ',
    description: 'ᴘᴏʟʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴏʟʟ* is coming soon!' });
    }
};
