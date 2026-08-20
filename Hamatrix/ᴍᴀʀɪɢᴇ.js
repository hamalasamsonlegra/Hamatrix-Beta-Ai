module.exports = {
    name: 'ᴍᴀʀɪɢᴇ',
    description: 'ᴍᴀʀɪɢᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴀʀɪɢᴇ* is coming soon!' });
    }
};
