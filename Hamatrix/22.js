module.exports = {
    name: '22',
    description: 'ʙᴏʏᴅᴘ22 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ22* is coming soon!' });
    }
};
