module.exports = {
    name: 'ᴀɴᴛɪᴄᴀʟʟ',
    description: 'ᴀɴᴛɪᴄᴀʟʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴᴛɪᴄᴀʟʟ* is coming soon!' });
    }
};
