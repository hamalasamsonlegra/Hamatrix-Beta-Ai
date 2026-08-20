module.exports = {
    name: '10',
    description: 'ʙᴏʏᴅᴘ10 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ10* is coming soon!' });
    }
};
