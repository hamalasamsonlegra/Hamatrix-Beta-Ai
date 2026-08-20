module.exports = {
    name: 'ʙᴏᴛᴅᴘ',
    description: 'ʙᴏᴛᴅᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏᴛᴅᴘ* is coming soon!' });
    }
};
