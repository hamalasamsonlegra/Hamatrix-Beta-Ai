module.exports = {
    name: 'ᴘɪᴄᴋᴜᴘʟɪɴᴇ',
    description: 'ᴘɪᴄᴋᴜᴘʟɪɴᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘɪᴄᴋᴜᴘʟɪɴᴇ* is coming soon!' });
    }
};
