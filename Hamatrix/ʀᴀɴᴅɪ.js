module.exports = {
    name: 'ʀᴀɴᴅɪ',
    description: 'ʀᴀɴᴅɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴀɴᴅɪ* is coming soon!' });
    }
};
