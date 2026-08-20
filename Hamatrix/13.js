module.exports = {
    name: '13',
    description: 'ʙᴏʏᴅᴘ13 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ13* is coming soon!' });
    }
};
