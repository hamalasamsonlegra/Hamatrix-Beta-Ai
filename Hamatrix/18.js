module.exports = {
    name: '18',
    description: 'ʙᴏʏᴅᴘ18 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ18* is coming soon!' });
    }
};
