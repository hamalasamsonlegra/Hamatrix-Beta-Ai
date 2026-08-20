module.exports = {
    name: 'ᴀɴɢʀʏ',
    description: 'ᴀɴɢʀʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴɢʀʏ* is coming soon!' });
    }
};
