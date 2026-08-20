module.exports = {
    name: 'ʀᴀᴛᴇ',
    description: 'ʀᴀᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴀᴛᴇ* is coming soon!' });
    }
};
