module.exports = {
    name: 'ɢʟᴏᴍᴘ',
    description: 'ɢʟᴏᴍᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢʟᴏᴍᴘ* is coming soon!' });
    }
};
