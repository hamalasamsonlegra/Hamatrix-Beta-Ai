module.exports = {
    name: 'ᴅᴀᴛᴇ',
    description: 'ᴅᴀᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴀᴛᴇ* is coming soon!' });
    }
};
