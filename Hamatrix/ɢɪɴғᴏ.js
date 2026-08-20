module.exports = {
    name: 'ɢɪɴғᴏ',
    description: 'ɢɪɴғᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢɪɴғᴏ* is coming soon!' });
    }
};
