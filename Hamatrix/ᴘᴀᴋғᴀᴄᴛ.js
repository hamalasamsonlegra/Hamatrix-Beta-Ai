module.exports = {
    name: 'ᴘᴀᴋғᴀᴄᴛ',
    description: 'ᴘᴀᴋғᴀᴄᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴀᴋғᴀᴄᴛ* is coming soon!' });
    }
};
