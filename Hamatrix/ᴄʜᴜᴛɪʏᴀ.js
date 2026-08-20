module.exports = {
    name: 'ᴄʜᴜᴛɪʏᴀ',
    description: 'ᴄʜᴜᴛɪʏᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴜᴛɪʏᴀ* is coming soon!' });
    }
};
