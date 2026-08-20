module.exports = {
    name: 'ᴏɴʟɪɴᴇ',
    description: 'ᴏɴʟɪɴᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏɴʟɪɴᴇ* is coming soon!' });
    }
};
