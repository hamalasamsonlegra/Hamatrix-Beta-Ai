module.exports = {
    name: 'ᴇᴍᴏᴛɪᴏɴᴀʟᴅᴀᴍᴀɢᴇ',
    description: 'ᴇᴍᴏᴛɪᴏɴᴀʟᴅᴀᴍᴀɢᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇᴍᴏᴛɪᴏɴᴀʟᴅᴀᴍᴀɢᴇ* is coming soon!' });
    }
};
