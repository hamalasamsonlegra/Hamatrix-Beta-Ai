module.exports = {
    name: 'ᴏᴄᴇᴀɴ',
    description: 'ᴏᴄᴇᴀɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏᴄᴇᴀɴ* is coming soon!' });
    }
};
