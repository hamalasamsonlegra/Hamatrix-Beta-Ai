module.exports = {
    name: 'ᴡᴇᴀᴛʜᴇʀ',
    description: 'ᴡᴇᴀᴛʜᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴇᴀᴛʜᴇʀ* is coming soon!' });
    }
};
