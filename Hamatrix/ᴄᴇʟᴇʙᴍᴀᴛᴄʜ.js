module.exports = {
    name: 'ᴄᴇʟᴇʙᴍᴀᴛᴄʜ',
    description: 'ᴄᴇʟᴇʙᴍᴀᴛᴄʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴇʟᴇʙᴍᴀᴛᴄʜ* is coming soon!' });
    }
};
