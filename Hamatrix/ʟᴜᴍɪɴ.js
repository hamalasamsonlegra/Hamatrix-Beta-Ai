module.exports = {
    name: 'ʟᴜᴍɪɴ',
    description: 'ʟᴜᴍɪɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴜᴍɪɴ* is coming soon!' });
    }
};
