module.exports = {
    name: 's64',
    description: 'ʙᴀsᴇ64 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴀsᴇ64* is coming soon!' });
    }
};
