module.exports = {
    name: '46',
    description: 'ᴜɴʙᴀɴ46 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ46* is coming soon!' });
    }
};
