module.exports = {
    name: 'ʀᴄᴏʟᴏʀ',
    description: 'ʀᴄᴏʟᴏʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴄᴏʟᴏʀ* is coming soon!' });
    }
};
