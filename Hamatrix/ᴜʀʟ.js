module.exports = {
    name: 'ᴜʀʟ',
    description: 'ᴜʀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜʀʟ* is coming soon!' });
    }
};
