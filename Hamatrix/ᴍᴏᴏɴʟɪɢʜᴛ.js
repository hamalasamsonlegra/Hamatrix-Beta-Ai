module.exports = {
    name: 'ᴍᴏᴏɴʟɪɢʜᴛ',
    description: 'ᴍᴏᴏɴʟɪɢʜᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴏᴏɴʟɪɢʜᴛ* is coming soon!' });
    }
};
