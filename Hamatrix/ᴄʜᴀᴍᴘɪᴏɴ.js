module.exports = {
    name: 'ᴄʜᴀᴍᴘɪᴏɴ',
    description: 'ᴄʜᴀᴍᴘɪᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴀᴍᴘɪᴏɴ* is coming soon!' });
    }
};
