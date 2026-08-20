module.exports = {
    name: '1',
    description: 'ʙᴏʏᴅᴘ1 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ1* is coming soon!' });
    }
};
