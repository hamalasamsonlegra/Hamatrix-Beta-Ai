module.exports = {
    name: 'ʜᴀᴅɪᴛʜ',
    description: 'ʜᴀᴅɪᴛʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴀᴅɪᴛʜ* is coming soon!' });
    }
};
