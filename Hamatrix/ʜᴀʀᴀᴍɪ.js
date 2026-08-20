module.exports = {
    name: 'ʜᴀʀᴀᴍɪ',
    description: 'ʜᴀʀᴀᴍɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴀʀᴀᴍɪ* is coming soon!' });
    }
};
