module.exports = {
    name: 'ɢʀᴀᴍᴍᴀʀʟʏ',
    description: 'ɢʀᴀᴍᴍᴀʀʟʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢʀᴀᴍᴍᴀʀʟʏ* is coming soon!' });
    }
};
