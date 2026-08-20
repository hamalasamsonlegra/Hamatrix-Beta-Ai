module.exports = {
    name: 'ғᴀɴᴄʏ',
    description: 'ғᴀɴᴄʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ғᴀɴᴄʏ* is coming soon!' });
    }
};
