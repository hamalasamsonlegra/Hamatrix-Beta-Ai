module.exports = {
    name: 'ɢʀᴀᴍᴍᴀʀ',
    description: 'ɢʀᴀᴍᴍᴀʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢʀᴀᴍᴍᴀʀ* is coming soon!' });
    }
};
