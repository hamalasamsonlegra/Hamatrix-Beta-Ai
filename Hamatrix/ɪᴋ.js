module.exports = {
    name: 'ɪᴋ',
    description: 'ɪᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪᴋ* is coming soon!' });
    }
};
