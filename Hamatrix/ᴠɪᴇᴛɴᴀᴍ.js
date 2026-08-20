module.exports = {
    name: 'ᴠɪᴇᴛɴᴀᴍ',
    description: 'ᴠɪᴇᴛɴᴀᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴠɪᴇᴛɴᴀᴍ* is coming soon!' });
    }
};
