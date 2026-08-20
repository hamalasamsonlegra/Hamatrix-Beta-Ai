module.exports = {
    name: 'ғʙ',
    description: 'ғʙ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ғʙ* is coming soon!' });
    }
};
