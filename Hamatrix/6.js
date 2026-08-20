module.exports = {
    name: '6',
    description: 'ʙᴏʏᴅᴘ6 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ6* is coming soon!' });
    }
};
