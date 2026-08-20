module.exports = {
    name: 'ᴅᴇᴍᴏɴ',
    description: 'ᴅᴇᴍᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴇᴍᴏɴ* is coming soon!' });
    }
};
