module.exports = {
    name: 'ʙᴏᴍʙ',
    description: 'ʙᴏᴍʙ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏᴍʙ* is coming soon!' });
    }
};
