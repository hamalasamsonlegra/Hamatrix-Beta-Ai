module.exports = {
    name: 'ɪɴᴛɪᴍᴀᴛᴇ',
    description: 'ɪɴᴛɪᴍᴀᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪɴᴛɪᴍᴀᴛᴇ* is coming soon!' });
    }
};
