module.exports = {
    name: 'ᴄʜɪʙɪ',
    description: 'ᴄʜɪʙɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜɪʙɪ* is coming soon!' });
    }
};
