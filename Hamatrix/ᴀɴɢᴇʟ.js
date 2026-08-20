module.exports = {
    name: 'ᴀɴɢᴇʟ',
    description: 'ᴀɴɢᴇʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴɢᴇʟ* is coming soon!' });
    }
};
