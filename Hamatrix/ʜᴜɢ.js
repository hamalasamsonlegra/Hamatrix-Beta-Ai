module.exports = {
    name: 'ʜᴜɢ',
    description: 'ʜᴜɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴜɢ* is coming soon!' });
    }
};
