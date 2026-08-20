module.exports = {
    name: 'ʙᴇʟᴏᴠᴇᴅ',
    description: 'ʙᴇʟᴏᴠᴇᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴇʟᴏᴠᴇᴅ* is coming soon!' });
    }
};
