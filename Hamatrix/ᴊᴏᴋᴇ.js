module.exports = {
    name: 'ᴊᴏᴋᴇ',
    description: 'ᴊᴏᴋᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴊᴏᴋᴇ* is coming soon!' });
    }
};
