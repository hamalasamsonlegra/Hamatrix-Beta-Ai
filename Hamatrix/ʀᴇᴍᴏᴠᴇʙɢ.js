module.exports = {
    name: 'ʀᴇᴍᴏᴠᴇʙɢ',
    description: 'ʀᴇᴍᴏᴠᴇʙɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴍᴏᴠᴇʙɢ* is coming soon!' });
    }
};
