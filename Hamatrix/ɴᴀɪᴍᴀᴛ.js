module.exports = {
    name: 'ɴᴀɪᴍᴀᴛ',
    description: 'ɴᴀɪᴍᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴀɪᴍᴀᴛ* is coming soon!' });
    }
};
