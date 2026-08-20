module.exports = {
    name: 'ᴍʏʟᴏᴠᴇ',
    description: 'ᴍʏʟᴏᴠᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍʏʟᴏᴠᴇ* is coming soon!' });
    }
};
