module.exports = {
    name: 'ᴅʀᴀɢᴏɴ',
    description: 'ᴅʀᴀɢᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅʀᴀɢᴏɴ* is coming soon!' });
    }
};
