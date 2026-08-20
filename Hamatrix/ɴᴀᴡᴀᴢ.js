module.exports = {
    name: 'ɴᴀᴡᴀᴢ',
    description: 'ɴᴀᴡᴀᴢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴀᴡᴀᴢ* is coming soon!' });
    }
};
