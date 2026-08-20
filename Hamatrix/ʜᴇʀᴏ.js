module.exports = {
    name: 'ʜᴇʀᴏ',
    description: 'ʜᴇʀᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴇʀᴏ* is coming soon!' });
    }
};
