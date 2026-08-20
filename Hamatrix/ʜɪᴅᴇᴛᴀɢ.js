module.exports = {
    name: 'ʜɪᴅᴇᴛᴀɢ',
    description: 'ʜɪᴅᴇᴛᴀɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜɪᴅᴇᴛᴀɢ* is coming soon!' });
    }
};
