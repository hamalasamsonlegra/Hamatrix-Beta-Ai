module.exports = {
    name: 'ʜᴏᴛ',
    description: 'ʜᴏᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴏᴛ* is coming soon!' });
    }
};
