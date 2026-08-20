module.exports = {
    name: 'ʙᴀʜᴀᴀɴᴀ',
    description: 'ʙᴀʜᴀᴀɴᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴀʜᴀᴀɴᴀ* is coming soon!' });
    }
};
