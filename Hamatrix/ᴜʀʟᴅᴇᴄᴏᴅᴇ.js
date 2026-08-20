module.exports = {
    name: 'ᴜʀʟᴅᴇᴄᴏᴅᴇ',
    description: 'ᴜʀʟᴅᴇᴄᴏᴅᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜʀʟᴅᴇᴄᴏᴅᴇ* is coming soon!' });
    }
};
