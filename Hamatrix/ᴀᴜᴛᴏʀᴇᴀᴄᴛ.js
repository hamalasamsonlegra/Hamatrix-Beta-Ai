module.exports = {
    name: 'ᴀᴜᴛᴏʀᴇᴀᴄᴛ',
    description: 'ᴀᴜᴛᴏʀᴇᴀᴄᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴜᴛᴏʀᴇᴀᴄᴛ* is coming soon!' });
    }
};
