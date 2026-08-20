module.exports = {
    name: 'ᴘᴇʜʟᴀᴀᴋʜᴀᴛ',
    description: 'ᴘᴇʜʟᴀᴀᴋʜᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴇʜʟᴀᴀᴋʜᴀᴛ* is coming soon!' });
    }
};
