module.exports = {
    name: 'ᴛᴀɢᴀʟʟ',
    description: 'ᴛᴀɢᴀʟʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀɢᴀʟʟ* is coming soon!' });
    }
};
