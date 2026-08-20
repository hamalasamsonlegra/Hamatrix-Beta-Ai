module.exports = {
    name: 'ᴄᴀʟᴄᴜʟᴀᴛᴇ',
    description: 'ᴄᴀʟᴄᴜʟᴀᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴀʟᴄᴜʟᴀᴛᴇ* is coming soon!' });
    }
};
