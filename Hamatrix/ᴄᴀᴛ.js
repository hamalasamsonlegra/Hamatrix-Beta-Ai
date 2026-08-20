module.exports = {
    name: 'ᴄᴀᴛ',
    description: 'ᴄᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴀᴛ* is coming soon!' });
    }
};
