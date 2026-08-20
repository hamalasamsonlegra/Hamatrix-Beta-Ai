module.exports = {
    name: 'ɪɴᴅᴏ',
    description: 'ɪɴᴅᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪɴᴅᴏ* is coming soon!' });
    }
};
