module.exports = {
    name: '28',
    description: 'ᴜɴʙᴀɴ28 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ28* is coming soon!' });
    }
};
