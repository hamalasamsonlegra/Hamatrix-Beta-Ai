module.exports = {
    name: 'ʟᴏʟɪ',
    description: 'ʟᴏʟɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴏʟɪ* is coming soon!' });
    }
};
