module.exports = {
    name: 'ᴀᴅᴀʙ',
    description: 'ᴀᴅᴀʙ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴅᴀʙ* is coming soon!' });
    }
};
