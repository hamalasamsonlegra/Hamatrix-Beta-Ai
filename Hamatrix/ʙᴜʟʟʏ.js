module.exports = {
    name: 'ʙᴜʟʟʏ',
    description: 'ʙᴜʟʟʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴜʟʟʏ* is coming soon!' });
    }
};
