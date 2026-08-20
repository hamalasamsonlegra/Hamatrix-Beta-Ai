module.exports = {
    name: 'ʀᴇᴊᴇᴄᴛᴀʟʟ',
    description: 'ʀᴇᴊᴇᴄᴛᴀʟʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴊᴇᴄᴛᴀʟʟ* is coming soon!' });
    }
};
