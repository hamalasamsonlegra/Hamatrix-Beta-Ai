module.exports = {
    name: 'ᴀɴᴛɪʟɪɴᴋ',
    description: 'ᴀɴᴛɪʟɪɴᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴᴛɪʟɪɴᴋ* is coming soon!' });
    }
};
