module.exports = {
    name: 'ᴄʜᴀʀᴀᴄᴛᴇʀ',
    description: 'ᴄʜᴀʀᴀᴄᴛᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴀʀᴀᴄᴛᴇʀ* is coming soon!' });
    }
};
