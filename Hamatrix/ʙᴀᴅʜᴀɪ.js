module.exports = {
    name: 'ʙᴀᴅʜᴀɪ',
    description: 'ʙᴀᴅʜᴀɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴀᴅʜᴀɪ* is coming soon!' });
    }
};
