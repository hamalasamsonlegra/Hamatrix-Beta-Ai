module.exports = {
    name: 'ᴜʀʟᴇɴᴄᴏᴅᴇ',
    description: 'ᴜʀʟᴇɴᴄᴏᴅᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜʀʟᴇɴᴄᴏᴅᴇ* is coming soon!' });
    }
};
