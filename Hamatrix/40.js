module.exports = {
    name: '40',
    description: 'ᴜɴʙᴀɴ40 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ40* is coming soon!' });
    }
};
