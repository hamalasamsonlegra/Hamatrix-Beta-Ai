module.exports = {
    name: 'ᴜɴɪғᴏʀᴍ',
    description: 'ᴜɴɪғᴏʀᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴɪғᴏʀᴍ* is coming soon!' });
    }
};
