module.exports = {
    name: 'ʟᴜᴍɪɴᴀ',
    description: 'ʟᴜᴍɪɴᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴜᴍɪɴᴀ* is coming soon!' });
    }
};
