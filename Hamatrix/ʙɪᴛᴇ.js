module.exports = {
    name: 'ʙɪᴛᴇ',
    description: 'ʙɪᴛᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙɪᴛᴇ* is coming soon!' });
    }
};
