module.exports = {
    name: 'ʀᴀɴᴅᴏᴍɢɪʀʟ',
    description: 'ʀᴀɴᴅᴏᴍɢɪʀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴀɴᴅᴏᴍɢɪʀʟ* is coming soon!' });
    }
};
