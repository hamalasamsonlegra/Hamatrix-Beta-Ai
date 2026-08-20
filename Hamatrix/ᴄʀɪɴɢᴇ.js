module.exports = {
    name: 'ᴄʀɪɴɢᴇ',
    description: 'ᴄʀɪɴɢᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʀɪɴɢᴇ* is coming soon!' });
    }
};
