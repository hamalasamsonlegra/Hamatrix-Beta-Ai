module.exports = {
    name: 'ᴛʀᴜᴛʜ',
    description: 'ᴛʀᴜᴛʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛʀᴜᴛʜ* is coming soon!' });
    }
};
