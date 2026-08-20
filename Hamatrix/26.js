module.exports = {
    name: '26',
    description: 'ᴜɴʙᴀɴ26 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ26* is coming soon!' });
    }
};
