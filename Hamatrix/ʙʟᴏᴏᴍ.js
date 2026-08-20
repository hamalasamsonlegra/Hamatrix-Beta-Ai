module.exports = {
    name: 'ʙʟᴏᴏᴍ',
    description: 'ʙʟᴏᴏᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙʟᴏᴏᴍ* is coming soon!' });
    }
};
