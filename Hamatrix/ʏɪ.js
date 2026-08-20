module.exports = {
    name: 'ʏɪ',
    description: 'ʏɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʏɪ* is coming soon!' });
    }
};
