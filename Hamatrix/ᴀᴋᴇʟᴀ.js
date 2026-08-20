module.exports = {
    name: 'ᴀᴋᴇʟᴀ',
    description: 'ᴀᴋᴇʟᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴋᴇʟᴀ* is coming soon!' });
    }
};
