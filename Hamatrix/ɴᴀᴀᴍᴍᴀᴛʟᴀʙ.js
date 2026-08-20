module.exports = {
    name: 'ɴᴀᴀᴍᴍᴀᴛʟᴀʙ',
    description: 'ɴᴀᴀᴍᴍᴀᴛʟᴀʙ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴀᴀᴍᴍᴀᴛʟᴀʙ* is coming soon!' });
    }
};
