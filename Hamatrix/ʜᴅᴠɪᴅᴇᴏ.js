module.exports = {
    name: 'ʜᴅᴠɪᴅᴇᴏ',
    description: 'ʜᴅᴠɪᴅᴇᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴅᴠɪᴅᴇᴏ* is coming soon!' });
    }
};
