module.exports = {
    name: 'ᴘᴀɪʀ',
    description: 'ᴘᴀɪʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴀɪʀ* is coming soon!' });
    }
};
