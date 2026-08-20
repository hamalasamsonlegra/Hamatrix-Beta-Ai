module.exports = {
    name: 'ʀᴀɪɴʏ',
    description: 'ʀᴀɪɴʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴀɪɴʏ* is coming soon!' });
    }
};
