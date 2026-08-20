module.exports = {
    name: 'ᴅᴀʀʟɪɴɢ',
    description: 'ᴅᴀʀʟɪɴɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴀʀʟɪɴɢ* is coming soon!' });
    }
};
