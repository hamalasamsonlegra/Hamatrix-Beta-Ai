module.exports = {
    name: 'ᴡᴀʜ',
    description: 'ᴡᴀʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴀʜ* is coming soon!' });
    }
};
