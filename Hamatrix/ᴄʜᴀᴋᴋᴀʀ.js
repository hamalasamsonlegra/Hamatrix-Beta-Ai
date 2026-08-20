module.exports = {
    name: 'ᴄʜᴀᴋᴋᴀʀ',
    description: 'ᴄʜᴀᴋᴋᴀʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴀᴋᴋᴀʀ* is coming soon!' });
    }
};
