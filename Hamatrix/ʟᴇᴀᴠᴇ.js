module.exports = {
    name: 'ʟᴇᴀᴠᴇ',
    description: 'ʟᴇᴀᴠᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴇᴀᴠᴇ* is coming soon!' });
    }
};
