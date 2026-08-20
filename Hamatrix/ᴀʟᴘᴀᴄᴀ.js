module.exports = {
    name: 'ᴀʟᴘᴀᴄᴀ',
    description: 'ᴀʟᴘᴀᴄᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀʟᴘᴀᴄᴀ* is coming soon!' });
    }
};
