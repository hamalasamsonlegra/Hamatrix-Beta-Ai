module.exports = {
    name: 'ᴅᴜᴀɪɴ',
    description: 'ᴅᴜᴀɪɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴜᴀɪɴ* is coming soon!' });
    }
};
