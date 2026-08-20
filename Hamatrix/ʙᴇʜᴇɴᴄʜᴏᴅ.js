module.exports = {
    name: 'ʙᴇʜᴇɴᴄʜᴏᴅ',
    description: 'ʙᴇʜᴇɴᴄʜᴏᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴇʜᴇɴᴄʜᴏᴅ* is coming soon!' });
    }
};
