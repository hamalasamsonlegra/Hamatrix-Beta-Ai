module.exports = {
    name: 'ʙᴏʏᴘɪᴄ',
    description: 'ʙᴏʏᴘɪᴄ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏʏᴘɪᴄ* is coming soon!' });
    }
};
