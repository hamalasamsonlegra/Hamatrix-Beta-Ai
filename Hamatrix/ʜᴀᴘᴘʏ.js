module.exports = {
    name: 'ʜᴀᴘᴘʏ',
    description: 'ʜᴀᴘᴘʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴀᴘᴘʏ* is coming soon!' });
    }
};
