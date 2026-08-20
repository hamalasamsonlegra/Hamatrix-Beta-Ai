module.exports = {
    name: 'ᴄᴀʀ',
    description: 'ᴄᴀʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴀʀ* is coming soon!' });
    }
};
