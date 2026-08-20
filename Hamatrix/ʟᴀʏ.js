module.exports = {
    name: 'ʟᴀʏ',
    description: 'ʟᴀʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʟᴀʏ* is coming soon!' });
    }
};
