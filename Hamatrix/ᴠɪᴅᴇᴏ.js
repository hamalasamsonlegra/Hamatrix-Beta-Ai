module.exports = {
    name: 'ᴠɪᴅᴇᴏ',
    description: 'ᴠɪᴅᴇᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴠɪᴅᴇᴏ* is coming soon!' });
    }
};
