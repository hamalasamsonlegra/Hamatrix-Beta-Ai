module.exports = {
    name: 'ᴀғғᴇᴄᴛɪᴏɴ',
    description: 'ᴀғғᴇᴄᴛɪᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀғғᴇᴄᴛɪᴏɴ* is coming soon!' });
    }
};
