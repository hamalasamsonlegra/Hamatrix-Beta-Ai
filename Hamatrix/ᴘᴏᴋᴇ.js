module.exports = {
    name: 'ᴘᴏᴋᴇ',
    description: 'ᴘᴏᴋᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴏᴋᴇ* is coming soon!' });
    }
};
