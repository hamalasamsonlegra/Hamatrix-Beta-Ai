module.exports = {
    name: 'ᴘʀᴀʏᴛɪᴍᴇ',
    description: 'ᴘʀᴀʏᴛɪᴍᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘʀᴀʏᴛɪᴍᴇ* is coming soon!' });
    }
};
