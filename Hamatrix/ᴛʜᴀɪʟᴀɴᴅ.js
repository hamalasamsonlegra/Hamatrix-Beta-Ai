module.exports = {
    name: 'ᴛʜᴀɪʟᴀɴᴅ',
    description: 'ᴛʜᴀɪʟᴀɴᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛʜᴀɪʟᴀɴᴅ* is coming soon!' });
    }
};
