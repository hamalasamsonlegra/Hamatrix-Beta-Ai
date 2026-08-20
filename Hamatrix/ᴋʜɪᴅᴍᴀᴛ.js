module.exports = {
    name: 'ᴋʜɪᴅᴍᴀᴛ',
    description: 'ᴋʜɪᴅᴍᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋʜɪᴅᴍᴀᴛ* is coming soon!' });
    }
};
