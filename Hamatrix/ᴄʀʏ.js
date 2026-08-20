module.exports = {
    name: 'ᴄʀʏ',
    description: 'ᴄʀʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʀʏ* is coming soon!' });
    }
};
