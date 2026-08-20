module.exports = {
    name: 'ᴢɪᴅᴅɪᴅɪʟ',
    description: 'ᴢɪᴅᴅɪᴅɪʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴢɪᴅᴅɪᴅɪʟ* is coming soon!' });
    }
};
