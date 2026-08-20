module.exports = {
    name: '8',
    description: 'ʙᴏʏᴅᴘ8 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ8* is coming soon!' });
    }
};
