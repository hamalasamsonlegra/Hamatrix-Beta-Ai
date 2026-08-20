module.exports = {
    name: 'ᴅɪʟʟᴀɢɪ',
    description: 'ᴅɪʟʟᴀɢɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅɪʟʟᴀɢɪ* is coming soon!' });
    }
};
