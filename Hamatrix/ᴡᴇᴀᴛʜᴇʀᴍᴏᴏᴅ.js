module.exports = {
    name: 'ᴡᴇᴀᴛʜᴇʀᴍᴏᴏᴅ',
    description: 'ᴡᴇᴀᴛʜᴇʀᴍᴏᴏᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴇᴀᴛʜᴇʀᴍᴏᴏᴅ* is coming soon!' });
    }
};
