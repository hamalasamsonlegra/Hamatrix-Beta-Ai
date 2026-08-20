module.exports = {
    name: 'ᴏᴘᴇɴᴄʜᴀᴛ',
    description: 'ᴏᴘᴇɴᴄʜᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏᴘᴇɴᴄʜᴀᴛ* is coming soon!' });
    }
};
