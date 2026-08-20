module.exports = {
    name: 'ᴘᴇʀғᴇᴄᴛᴍᴀᴛᴄʜ',
    description: 'ᴘᴇʀғᴇᴄᴛᴍᴀᴛᴄʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴇʀғᴇᴄᴛᴍᴀᴛᴄʜ* is coming soon!' });
    }
};
