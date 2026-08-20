module.exports = {
    name: 'ᴇɴᴄʜᴀɴᴛ',
    description: 'ᴇɴᴄʜᴀɴᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇɴᴄʜᴀɴᴛ* is coming soon!' });
    }
};
