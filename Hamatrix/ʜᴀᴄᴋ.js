module.exports = {
    name: 'ʜᴀᴄᴋ',
    description: 'ʜᴀᴄᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴀᴄᴋ* is coming soon!' });
    }
};
