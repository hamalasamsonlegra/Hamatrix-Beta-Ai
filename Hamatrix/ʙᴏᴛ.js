module.exports = {
    name: 'ʙᴏᴛ',
    description: 'ʙᴏᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏᴛ* is coming soon!' });
    }
};
