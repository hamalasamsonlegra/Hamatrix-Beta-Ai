module.exports = {
    name: '17',
    description: 'ʙᴏʏᴅᴘ17 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ17* is coming soon!' });
    }
};
