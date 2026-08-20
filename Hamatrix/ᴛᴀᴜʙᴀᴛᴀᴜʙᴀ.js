module.exports = {
    name: 'ᴛᴀᴜʙᴀᴛᴀᴜʙᴀ',
    description: 'ᴛᴀᴜʙᴀᴛᴀᴜʙᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀᴜʙᴀᴛᴀᴜʙᴀ* is coming soon!' });
    }
};
