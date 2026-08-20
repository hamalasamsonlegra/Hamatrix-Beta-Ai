module.exports = {
    name: 'ᴄᴀᴛɢɪʀʟ',
    description: 'ᴄᴀᴛɢɪʀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴀᴛɢɪʀʟ* is coming soon!' });
    }
};
