module.exports = {
    name: 'ᴍᴀᴅᴀʀᴄʜᴏᴅ',
    description: 'ᴍᴀᴅᴀʀᴄʜᴏᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴀᴅᴀʀᴄʜᴏᴅ* is coming soon!' });
    }
};
