module.exports = {
    name: 'ʙᴀᴄʜɪ',
    description: 'ʙᴀᴄʜɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴀᴄʜɪ* is coming soon!' });
    }
};
