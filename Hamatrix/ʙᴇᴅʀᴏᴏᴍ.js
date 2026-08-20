module.exports = {
    name: 'ʙᴇᴅʀᴏᴏᴍ',
    description: 'ʙᴇᴅʀᴏᴏᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴇᴅʀᴏᴏᴍ* is coming soon!' });
    }
};
