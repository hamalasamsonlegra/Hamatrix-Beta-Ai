module.exports = {
    name: 'ᴋᴀᴍᴀᴀʟ',
    description: 'ᴋᴀᴍᴀᴀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋᴀᴍᴀᴀʟ* is coming soon!' });
    }
};
