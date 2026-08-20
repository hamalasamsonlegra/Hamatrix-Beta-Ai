module.exports = {
    name: '34',
    description: 'ʏɪ34ʙ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʏɪ34ʙ* is coming soon!' });
    }
};
