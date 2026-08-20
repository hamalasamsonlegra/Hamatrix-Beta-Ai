module.exports = {
    name: '48',
    description: 'ᴜɴʙᴀɴ48 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ48* is coming soon!' });
    }
};
