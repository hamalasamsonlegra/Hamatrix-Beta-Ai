module.exports = {
    name: 'ᴇʟғ',
    description: 'ᴇʟғ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇʟғ* is coming soon!' });
    }
};
