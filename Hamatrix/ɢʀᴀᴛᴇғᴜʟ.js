module.exports = {
    name: 'ɢʀᴀᴛᴇғᴜʟ',
    description: 'ɢʀᴀᴛᴇғᴜʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢʀᴀᴛᴇғᴜʟ* is coming soon!' });
    }
};
