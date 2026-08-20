module.exports = {
    name: '9',
    description: 'ʙᴏʏᴅᴘ9 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴅᴘ9* is coming soon!' });
    }
};
