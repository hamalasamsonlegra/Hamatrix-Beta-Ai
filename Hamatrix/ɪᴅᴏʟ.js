module.exports = {
    name: 'ɪᴅᴏʟ',
    description: 'ɪᴅᴏʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪᴅᴏʟ* is coming soon!' });
    }
};
