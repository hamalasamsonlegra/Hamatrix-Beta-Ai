module.exports = {
    name: '33',
    description: 'ᴜɴʙᴀɴ33 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ33* is coming soon!' });
    }
};
