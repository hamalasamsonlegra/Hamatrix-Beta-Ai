module.exports = {
    name: 'ʟᴜᴍɪɴᴀɪ',
    description: 'ʟᴜᴍɪɴᴀɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴜᴍɪɴᴀɪ* is coming soon!' });
    }
};
