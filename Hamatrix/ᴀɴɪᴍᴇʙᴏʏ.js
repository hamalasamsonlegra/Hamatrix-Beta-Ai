module.exports = {
    name: 'ᴀɴɪᴍᴇʙᴏʏ',
    description: 'ᴀɴɪᴍᴇʙᴏʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴɪᴍᴇʙᴏʏ* is coming soon!' });
    }
};
