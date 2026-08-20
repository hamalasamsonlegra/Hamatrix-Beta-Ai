module.exports = {
    name: 'ɴɪᴋᴀʟ',
    description: 'ɴɪᴋᴀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴɪᴋᴀʟ* is coming soon!' });
    }
};
