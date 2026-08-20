module.exports = {
    name: 'ʜᴀɴᴅʜᴏʟᴅ',
    description: 'ʜᴀɴᴅʜᴏʟᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴀɴᴅʜᴏʟᴅ* is coming soon!' });
    }
};
