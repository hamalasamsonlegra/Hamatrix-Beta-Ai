module.exports = {
    name: 'ᴡɪᴋɪғᴀᴄᴛ',
    description: 'ᴡɪᴋɪғᴀᴄᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡɪᴋɪғᴀᴄᴛ* is coming soon!' });
    }
};
