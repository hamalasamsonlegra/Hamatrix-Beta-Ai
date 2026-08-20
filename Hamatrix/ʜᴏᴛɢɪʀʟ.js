module.exports = {
    name: 'ʜᴏᴛɢɪʀʟ',
    description: 'ʜᴏᴛɢɪʀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴏᴛɢɪʀʟ* is coming soon!' });
    }
};
