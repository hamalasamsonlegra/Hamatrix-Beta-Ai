module.exports = {
    name: 'ʙᴏɴᴋ',
    description: 'ʙᴏɴᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴏɴᴋ* is coming soon!' });
    }
};
