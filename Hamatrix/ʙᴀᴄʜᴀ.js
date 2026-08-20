module.exports = {
    name: 'ʙᴀᴄʜᴀ',
    description: 'ʙᴀᴄʜᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴀᴄʜᴀ* is coming soon!' });
    }
};
