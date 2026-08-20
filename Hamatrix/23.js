module.exports = {
    name: '23',
    description: 'ᴜɴʙᴀɴ23 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ23* is coming soon!' });
    }
};
