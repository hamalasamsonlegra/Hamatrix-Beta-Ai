module.exports = {
    name: 'ɴᴜᴍʙᴇʀɢᴀᴍᴇ',
    description: 'ɴᴜᴍʙᴇʀɢᴀᴍᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴜᴍʙᴇʀɢᴀᴍᴇ* is coming soon!' });
    }
};
