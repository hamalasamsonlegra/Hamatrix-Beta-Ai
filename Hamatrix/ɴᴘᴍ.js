module.exports = {
    name: 'ɴᴘᴍ',
    description: 'ɴᴘᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴘᴍ* is coming soon!' });
    }
};
