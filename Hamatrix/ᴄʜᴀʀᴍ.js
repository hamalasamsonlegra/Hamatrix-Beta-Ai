module.exports = {
    name: 'ᴄʜᴀʀᴍ',
    description: 'ᴄʜᴀʀᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴀʀᴍ* is coming soon!' });
    }
};
