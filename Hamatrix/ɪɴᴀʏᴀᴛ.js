module.exports = {
    name: 'ɪɴᴀʏᴀᴛ',
    description: 'ɪɴᴀʏᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪɴᴀʏᴀᴛ* is coming soon!' });
    }
};
