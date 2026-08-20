module.exports = {
    name: 'ᴄᴜᴅᴅʟᴇ',
    description: 'ᴄᴜᴅᴅʟᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴜᴅᴅʟᴇ* is coming soon!' });
    }
};
