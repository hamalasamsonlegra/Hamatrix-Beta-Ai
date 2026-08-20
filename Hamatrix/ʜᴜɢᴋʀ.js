module.exports = {
    name: 'ʜᴜɢᴋʀ',
    description: 'ʜᴜɢᴋʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴜɢᴋʀ* is coming soon!' });
    }
};
