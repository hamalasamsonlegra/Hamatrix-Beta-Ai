module.exports = {
    name: 'ɢɪᴛʜᴜʙ',
    description: 'ɢɪᴛʜᴜʙ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢɪᴛʜᴜʙ* is coming soon!' });
    }
};
