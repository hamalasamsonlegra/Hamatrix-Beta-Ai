module.exports = {
    name: 'ᴇᴇᴠᴇᴇ',
    description: 'ᴇᴇᴠᴇᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇᴇᴠᴇᴇ* is coming soon!' });
    }
};
