module.exports = {
    name: 'ᴏᴡɴᴇʀɴᴜᴍʙᴇʀ',
    description: 'ᴏᴡɴᴇʀɴᴜᴍʙᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏᴡɴᴇʀɴᴜᴍʙᴇʀ* is coming soon!' });
    }
};
