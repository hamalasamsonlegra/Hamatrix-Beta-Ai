module.exports = {
    name: 'ᴅʜᴀᴅᴋᴀɴ',
    description: 'ᴅʜᴀᴅᴋᴀɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅʜᴀᴅᴋᴀɴ* is coming soon!' });
    }
};
