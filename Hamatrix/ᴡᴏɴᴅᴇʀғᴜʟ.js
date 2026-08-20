module.exports = {
    name: 'ᴡᴏɴᴅᴇʀғᴜʟ',
    description: 'ᴡᴏɴᴅᴇʀғᴜʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴏɴᴅᴇʀғᴜʟ* is coming soon!' });
    }
};
