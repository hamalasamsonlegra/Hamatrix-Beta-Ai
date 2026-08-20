module.exports = {
    name: 'ᴄʜᴀᴛɢᴘᴛ',
    description: 'ᴄʜᴀᴛɢᴘᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴀᴛɢᴘᴛ* is coming soon!' });
    }
};
