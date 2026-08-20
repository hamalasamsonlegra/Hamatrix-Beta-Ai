module.exports = {
    name: 'ғᴏʀᴇᴠᴇʀ',
    description: 'ғᴏʀᴇᴠᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ғᴏʀᴇᴠᴇʀ* is coming soon!' });
    }
};
