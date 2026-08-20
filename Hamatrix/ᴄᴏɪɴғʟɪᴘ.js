module.exports = {
    name: 'ᴄᴏɪɴғʟɪᴘ',
    description: 'ᴄᴏɪɴғʟɪᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏɪɴғʟɪᴘ* is coming soon!' });
    }
};
