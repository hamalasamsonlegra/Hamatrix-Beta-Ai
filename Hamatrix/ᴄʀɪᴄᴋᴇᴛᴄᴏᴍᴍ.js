module.exports = {
    name: 'ᴄʀɪᴄᴋᴇᴛᴄᴏᴍᴍ',
    description: 'ᴄʀɪᴄᴋᴇᴛᴄᴏᴍᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʀɪᴄᴋᴇᴛᴄᴏᴍᴍ* is coming soon!' });
    }
};
