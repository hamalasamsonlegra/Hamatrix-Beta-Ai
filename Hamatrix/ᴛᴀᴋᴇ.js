module.exports = {
    name: 'ᴛᴀᴋᴇ',
    description: 'ᴛᴀᴋᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀᴋᴇ* is coming soon!' });
    }
};
