module.exports = {
    name: '12',
    description: 'ʙᴏʏᴅᴘ12 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ12* is coming soon!' });
    }
};
