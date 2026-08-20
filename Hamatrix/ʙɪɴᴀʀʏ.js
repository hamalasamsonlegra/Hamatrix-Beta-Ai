module.exports = {
    name: 'ʙɪɴᴀʀʏ',
    description: 'ʙɪɴᴀʀʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙɪɴᴀʀʏ* is coming soon!' });
    }
};
