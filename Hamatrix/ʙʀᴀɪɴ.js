module.exports = {
    name: 'ʙʀᴀɪɴ',
    description: 'ʙʀᴀɪɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙʀᴀɪɴ* is coming soon!' });
    }
};
