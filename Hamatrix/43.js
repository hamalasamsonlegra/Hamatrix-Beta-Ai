module.exports = {
    name: '43',
    description: 'ᴜɴʙᴀɴ43 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ43* is coming soon!' });
    }
};
