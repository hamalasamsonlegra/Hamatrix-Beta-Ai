module.exports = {
    name: 'ɪᴍɢ',
    description: 'ɪᴍɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪᴍɢ* is coming soon!' });
    }
};
