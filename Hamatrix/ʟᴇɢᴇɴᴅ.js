module.exports = {
    name: 'ʟᴇɢᴇɴᴅ',
    description: 'ʟᴇɢᴇɴᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴇɢᴇɴᴅ* is coming soon!' });
    }
};
