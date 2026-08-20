module.exports = {
    name: 'ɪᴢᴢᴀᴛ',
    description: 'ɪᴢᴢᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɪᴢᴢᴀᴛ* is coming soon!' });
    }
};
