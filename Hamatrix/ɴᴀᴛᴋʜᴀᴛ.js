module.exports = {
    name: 'ɴᴀᴛᴋʜᴀᴛ',
    description: 'ɴᴀᴛᴋʜᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴀᴛᴋʜᴀᴛ* is coming soon!' });
    }
};
