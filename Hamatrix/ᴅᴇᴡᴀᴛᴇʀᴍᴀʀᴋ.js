module.exports = {
    name: 'ᴅᴇᴡᴀᴛᴇʀᴍᴀʀᴋ',
    description: 'ᴅᴇᴡᴀᴛᴇʀᴍᴀʀᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴇᴡᴀᴛᴇʀᴍᴀʀᴋ* is coming soon!' });
    }
};
