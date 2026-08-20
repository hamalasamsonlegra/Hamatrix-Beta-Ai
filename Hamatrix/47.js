module.exports = {
    name: '47',
    description: 'ᴜɴʙᴀɴ47 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴ47* is coming soon!' });
    }
};
