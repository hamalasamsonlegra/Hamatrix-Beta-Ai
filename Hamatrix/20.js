module.exports = {
    name: '20',
    description: 'ʙᴏʏᴅᴘ20 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ20* is coming soon!' });
    }
};
