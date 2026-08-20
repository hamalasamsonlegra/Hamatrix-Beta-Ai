module.exports = {
    name: 'ᴇᴍᴏᴊɪ',
    description: 'ᴇᴍᴏᴊɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇᴍᴏᴊɪ* is coming soon!' });
    }
};
