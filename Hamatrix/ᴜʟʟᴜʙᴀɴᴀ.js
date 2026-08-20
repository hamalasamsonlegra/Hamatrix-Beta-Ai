module.exports = {
    name: 'ᴜʟʟᴜʙᴀɴᴀ',
    description: 'ᴜʟʟᴜʙᴀɴᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜʟʟᴜʙᴀɴᴀ* is coming soon!' });
    }
};
