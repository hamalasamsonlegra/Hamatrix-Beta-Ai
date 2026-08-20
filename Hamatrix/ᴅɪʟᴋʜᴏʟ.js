module.exports = {
    name: 'ᴅɪʟᴋʜᴏʟ',
    description: 'ᴅɪʟᴋʜᴏʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅɪʟᴋʜᴏʟ* is coming soon!' });
    }
};
