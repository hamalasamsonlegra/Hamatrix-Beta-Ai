module.exports = {
    name: 'ʜᴏᴛɪᴍɢ',
    description: 'ʜᴏᴛɪᴍɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴏᴛɪᴍɢ* is coming soon!' });
    }
};
