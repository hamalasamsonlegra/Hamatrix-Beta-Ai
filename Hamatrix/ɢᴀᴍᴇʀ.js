module.exports = {
    name: 'ɢᴀᴍᴇʀ',
    description: 'ɢᴀᴍᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴀᴍᴇʀ* is coming soon!' });
    }
};
