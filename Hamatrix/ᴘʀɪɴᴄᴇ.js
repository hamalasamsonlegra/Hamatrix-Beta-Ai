module.exports = {
    name: 'ᴘʀɪɴᴄᴇ',
    description: 'ᴘʀɪɴᴄᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘʀɪɴᴄᴇ* is coming soon!' });
    }
};
