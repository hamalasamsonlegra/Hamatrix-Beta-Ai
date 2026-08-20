module.exports = {
    name: 'ʙᴀ',
    description: 'ʙᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴀ* is coming soon!' });
    }
};
