module.exports = {
    name: 'ɪᴘʜᴏɴᴇᴄʜᴀᴛ',
    description: 'ɪᴘʜᴏɴᴇᴄʜᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪᴘʜᴏɴᴇᴄʜᴀᴛ* is coming soon!' });
    }
};
