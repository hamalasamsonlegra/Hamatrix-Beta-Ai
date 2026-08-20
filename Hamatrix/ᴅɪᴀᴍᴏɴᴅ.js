module.exports = {
    name: 'ᴅɪᴀᴍᴏɴᴅ',
    description: 'ᴅɪᴀᴍᴏɴᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅɪᴀᴍᴏɴᴅ* is coming soon!' });
    }
};
