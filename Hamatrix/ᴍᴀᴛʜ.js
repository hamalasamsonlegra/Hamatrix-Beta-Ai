module.exports = {
    name: 'ᴍᴀᴛʜ',
    description: 'ᴍᴀᴛʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴀᴛʜ* is coming soon!' });
    }
};
