module.exports = {
    name: 'ᴀᴜᴛᴏʀᴇᴀᴅ',
    description: 'ᴀᴜᴛᴏʀᴇᴀᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴜᴛᴏʀᴇᴀᴅ* is coming soon!' });
    }
};
