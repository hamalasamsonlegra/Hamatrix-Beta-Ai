module.exports = {
    name: 'ʀᴀʜᴍᴀᴛ',
    description: 'ʀᴀʜᴍᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴀʜᴍᴀᴛ* is coming soon!' });
    }
};
