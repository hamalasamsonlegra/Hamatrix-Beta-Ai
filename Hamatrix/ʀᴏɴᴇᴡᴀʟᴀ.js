module.exports = {
    name: 'ʀᴏɴᴇᴡᴀʟᴀ',
    description: 'ʀᴏɴᴇᴡᴀʟᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴏɴᴇᴡᴀʟᴀ* is coming soon!' });
    }
};
