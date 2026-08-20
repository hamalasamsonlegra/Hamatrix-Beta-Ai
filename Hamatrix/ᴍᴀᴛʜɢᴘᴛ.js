module.exports = {
    name: 'ᴍᴀᴛʜɢᴘᴛ',
    description: 'ᴍᴀᴛʜɢᴘᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴀᴛʜɢᴘᴛ* is coming soon!' });
    }
};
