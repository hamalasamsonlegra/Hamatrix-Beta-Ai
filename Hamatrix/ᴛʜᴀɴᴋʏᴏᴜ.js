module.exports = {
    name: 'ᴛʜᴀɴᴋʏᴏᴜ',
    description: 'ᴛʜᴀɴᴋʏᴏᴜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛʜᴀɴᴋʏᴏᴜ* is coming soon!' });
    }
};
