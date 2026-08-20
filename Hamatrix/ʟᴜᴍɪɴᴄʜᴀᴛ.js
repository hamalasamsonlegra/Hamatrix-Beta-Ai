module.exports = {
    name: 'ʟᴜᴍɪɴᴄʜᴀᴛ',
    description: 'ʟᴜᴍɪɴᴄʜᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴜᴍɪɴᴄʜᴀᴛ* is coming soon!' });
    }
};
