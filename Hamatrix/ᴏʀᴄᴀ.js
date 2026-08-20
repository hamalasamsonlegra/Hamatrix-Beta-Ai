module.exports = {
    name: 'ᴏʀᴄᴀ',
    description: 'ᴏʀᴄᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏʀᴄᴀ* is coming soon!' });
    }
};
