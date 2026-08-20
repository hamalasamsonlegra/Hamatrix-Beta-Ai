module.exports = {
    name: 'ᴀᴄᴄᴇᴘᴛ',
    description: 'ᴀᴄᴄᴇᴘᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴄᴄᴇᴘᴛ* is coming soon!' });
    }
};
