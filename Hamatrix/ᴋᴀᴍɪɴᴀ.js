module.exports = {
    name: 'ᴋᴀᴍɪɴᴀ',
    description: 'ᴋᴀᴍɪɴᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋᴀᴍɪɴᴀ* is coming soon!' });
    }
};
