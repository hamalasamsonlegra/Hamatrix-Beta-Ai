module.exports = {
    name: 'ᴄᴏᴜᴘʟᴇᴘᴘ',
    description: 'ᴄᴏᴜᴘʟᴇᴘᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴜᴘʟᴇᴘᴘ* is coming soon!' });
    }
};
