module.exports = {
    name: 'ᴛᴀʟᴇɴᴛ',
    description: 'ᴛᴀʟᴇɴᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀʟᴇɴᴛ* is coming soon!' });
    }
};
