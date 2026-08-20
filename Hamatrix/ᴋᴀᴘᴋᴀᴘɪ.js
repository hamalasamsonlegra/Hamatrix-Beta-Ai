module.exports = {
    name: 'ᴋᴀᴘᴋᴀᴘɪ',
    description: 'ᴋᴀᴘᴋᴀᴘɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋᴀᴘᴋᴀᴘɪ* is coming soon!' });
    }
};
