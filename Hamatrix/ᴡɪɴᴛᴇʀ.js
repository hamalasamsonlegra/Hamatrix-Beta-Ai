module.exports = {
    name: 'ᴡɪɴᴛᴇʀ',
    description: 'ᴡɪɴᴛᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡɪɴᴛᴇʀ* is coming soon!' });
    }
};
