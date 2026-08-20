module.exports = {
    name: 'ᴄʟᴀᴜᴅᴇ',
    description: 'ᴄʟᴀᴜᴅᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʟᴀᴜᴅᴇ* is coming soon!' });
    }
};
