module.exports = {
    name: 'ᴡɪғᴇ',
    description: 'ᴡɪғᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡɪғᴇ* is coming soon!' });
    }
};
