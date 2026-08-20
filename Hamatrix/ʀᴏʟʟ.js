module.exports = {
    name: 'ʀᴏʟʟ',
    description: 'ʀᴏʟʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴏʟʟ* is coming soon!' });
    }
};
