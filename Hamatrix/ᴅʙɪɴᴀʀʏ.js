module.exports = {
    name: 'ᴅʙɪɴᴀʀʏ',
    description: 'ᴅʙɪɴᴀʀʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅʙɪɴᴀʀʏ* is coming soon!' });
    }
};
