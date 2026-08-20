module.exports = {
    name: 'ᴛᴇᴍᴘᴛᴀᴛɪᴏɴ',
    description: 'ᴛᴇᴍᴘᴛᴀᴛɪᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴇᴍᴘᴛᴀᴛɪᴏɴ* is coming soon!' });
    }
};
