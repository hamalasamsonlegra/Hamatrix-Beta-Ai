module.exports = {
    name: 'ᴀᴄᴄᴇᴘᴛᴀʟʟ',
    description: 'ᴀᴄᴄᴇᴘᴛᴀʟʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴄᴄᴇᴘᴛᴀʟʟ* is coming soon!' });
    }
};
