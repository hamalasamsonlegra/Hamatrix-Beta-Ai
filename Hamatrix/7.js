module.exports = {
    name: '7',
    description: 'ʙᴏʏᴅᴘ7 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ7* is coming soon!' });
    }
};
