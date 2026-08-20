module.exports = {
    name: 'ᴏɴʟɪɴᴇᴅᴇᴋʜɴᴀ',
    description: 'ᴏɴʟɪɴᴇᴅᴇᴋʜɴᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴏɴʟɪɴᴇᴅᴇᴋʜɴᴀ* is coming soon!' });
    }
};
