module.exports = {
    name: 's2',
    description: 'ɪɴᴅᴏɴᴇsɪᴀ2 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪɴᴅᴏɴᴇsɪᴀ2* is coming soon!' });
    }
};
