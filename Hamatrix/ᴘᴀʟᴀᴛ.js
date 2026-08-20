module.exports = {
    name: 'ᴘᴀʟᴀᴛ',
    description: 'ᴘᴀʟᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴀʟᴀᴛ* is coming soon!' });
    }
};
