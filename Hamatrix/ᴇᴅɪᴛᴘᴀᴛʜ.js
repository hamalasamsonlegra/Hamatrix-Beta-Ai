module.exports = {
    name: 'ᴇᴅɪᴛᴘᴀᴛʜ',
    description: 'ᴇᴅɪᴛᴘᴀᴛʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇᴅɪᴛᴘᴀᴛʜ* is coming soon!' });
    }
};
