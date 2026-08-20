module.exports = {
    name: 'ᴋᴀʀᴀᴍ',
    description: 'ᴋᴀʀᴀᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋᴀʀᴀᴍ* is coming soon!' });
    }
};
