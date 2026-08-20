module.exports = {
    name: 'ᴛɪᴄᴋʟᴇ',
    description: 'ᴛɪᴄᴋʟᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛɪᴄᴋʟᴇ* is coming soon!' });
    }
};
