module.exports = {
    name: 'ᴋɪᴀᴍɪɢᴀ',
    description: 'ᴋɪᴀᴍɪɢᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋɪᴀᴍɪɢᴀ* is coming soon!' });
    }
};
