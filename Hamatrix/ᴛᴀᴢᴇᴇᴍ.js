module.exports = {
    name: 'ᴛᴀᴢᴇᴇᴍ',
    description: 'ᴛᴀᴢᴇᴇᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀᴢᴇᴇᴍ* is coming soon!' });
    }
};
