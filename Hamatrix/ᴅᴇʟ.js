module.exports = {
    name: 'ᴅᴇʟ',
    description: 'ᴅᴇʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴇʟ* is coming soon!' });
    }
};
