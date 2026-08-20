module.exports = {
    name: 'ʙᴀɴ',
    description: 'ʙᴀɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴀɴ* is coming soon!' });
    }
};
