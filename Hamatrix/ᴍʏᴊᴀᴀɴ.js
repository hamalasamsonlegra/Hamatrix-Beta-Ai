module.exports = {
    name: 'ᴍʏᴊᴀᴀɴ',
    description: 'ᴍʏᴊᴀᴀɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍʏᴊᴀᴀɴ* is coming soon!' });
    }
};
