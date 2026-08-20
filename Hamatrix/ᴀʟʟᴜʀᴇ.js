module.exports = {
    name: 'ᴀʟʟᴜʀᴇ',
    description: 'ᴀʟʟᴜʀᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀʟʟᴜʀᴇ* is coming soon!' });
    }
};
