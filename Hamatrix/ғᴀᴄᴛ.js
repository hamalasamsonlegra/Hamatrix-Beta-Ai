module.exports = {
    name: 'ғᴀᴄᴛ',
    description: 'ғᴀᴄᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ғᴀᴄᴛ* is coming soon!' });
    }
};
