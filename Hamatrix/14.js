module.exports = {
    name: '14',
    description: 'ʙᴏʏᴅᴘ14 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ14* is coming soon!' });
    }
};
