module.exports = {
    name: 'ᴀɴʜᴍᴏᴇ',
    description: 'ᴀɴʜᴍᴏᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴʜᴍᴏᴇ* is coming soon!' });
    }
};
