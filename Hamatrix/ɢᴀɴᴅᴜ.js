module.exports = {
    name: 'ɢᴀɴᴅᴜ',
    description: 'ɢᴀɴᴅᴜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴀɴᴅᴜ* is coming soon!' });
    }
};
