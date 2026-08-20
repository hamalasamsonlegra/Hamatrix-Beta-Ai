module.exports = {
    name: 'ᴀɴᴛɪᴇᴅɪᴛ',
    description: 'ᴀɴᴛɪᴇᴅɪᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀɴᴛɪᴇᴅɪᴛ* is coming soon!' });
    }
};
