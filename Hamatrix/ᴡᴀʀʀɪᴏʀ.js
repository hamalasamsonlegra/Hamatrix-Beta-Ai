module.exports = {
    name: 'ᴡᴀʀʀɪᴏʀ',
    description: 'ᴡᴀʀʀɪᴏʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴀʀʀɪᴏʀ* is coming soon!' });
    }
};
