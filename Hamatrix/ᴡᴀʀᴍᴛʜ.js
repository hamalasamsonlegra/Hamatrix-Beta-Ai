module.exports = {
    name: 'ᴡᴀʀᴍᴛʜ',
    description: 'ᴡᴀʀᴍᴛʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴀʀᴍᴛʜ* is coming soon!' });
    }
};
