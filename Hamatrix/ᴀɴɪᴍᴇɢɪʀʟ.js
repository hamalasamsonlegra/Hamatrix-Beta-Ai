module.exports = {
    name: 'ᴀɴɪᴍᴇɢɪʀʟ',
    description: 'ᴀɴɪᴍᴇɢɪʀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴɪᴍᴇɢɪʀʟ* is coming soon!' });
    }
};
