module.exports = {
    name: 'ᴡᴇʟᴄᴏᴍᴇ',
    description: 'ᴡᴇʟᴄᴏᴍᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴇʟᴄᴏᴍᴇ* is coming soon!' });
    }
};
