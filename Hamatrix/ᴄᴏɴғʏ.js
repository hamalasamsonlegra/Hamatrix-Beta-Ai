module.exports = {
    name: 'ᴄᴏɴғʏ',
    description: 'ᴄᴏɴғʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏɴғʏ* is coming soon!' });
    }
};
