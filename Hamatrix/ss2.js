module.exports = {
    name: 'ss2',
    description: 'ɢsᴛᴀᴛᴜs2 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢsᴛᴀᴛᴜs2* is coming soon!' });
    }
};
