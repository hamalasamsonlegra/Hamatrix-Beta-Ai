module.exports = {
    name: 'ɴᴏᴍ',
    description: 'ɴᴏᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴏᴍ* is coming soon!' });
    }
};
