module.exports = {
    name: 'ᴅᴏʟʟʏ',
    description: 'ᴅᴏʟʟʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴏʟʟʏ* is coming soon!' });
    }
};
