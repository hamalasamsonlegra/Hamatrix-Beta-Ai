module.exports = {
    name: 'ᴅᴇʟᴘᴀᴛʜ',
    description: 'ᴅᴇʟᴘᴀᴛʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴇʟᴘᴀᴛʜ* is coming soon!' });
    }
};
