module.exports = {
    name: 'ᴍɪʜʀ',
    description: 'ᴍɪʜʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍɪʜʀ* is coming soon!' });
    }
};
