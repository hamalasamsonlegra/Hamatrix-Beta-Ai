module.exports = {
    name: '15',
    description: 'ʙᴏʏᴅᴘ15 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ15* is coming soon!' });
    }
};
