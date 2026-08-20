module.exports = {
    name: 'ᴛᴀǫᴅɪʀ',
    description: 'ᴛᴀǫᴅɪʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀǫᴅɪʀ* is coming soon!' });
    }
};
