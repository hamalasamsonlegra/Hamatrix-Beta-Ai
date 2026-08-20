module.exports = {
    name: 'ᴅᴀɴᴄᴇ',
    description: 'ᴅᴀɴᴄᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴀɴᴄᴇ* is coming soon!' });
    }
};
