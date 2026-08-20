module.exports = {
    name: 'ᴄʟᴏᴜᴅʏ',
    description: 'ᴄʟᴏᴜᴅʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʟᴏᴜᴅʏ* is coming soon!' });
    }
};
