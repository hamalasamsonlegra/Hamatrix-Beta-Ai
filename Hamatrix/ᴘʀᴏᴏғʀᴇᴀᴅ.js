module.exports = {
    name: 'ᴘʀᴏᴏғʀᴇᴀᴅ',
    description: 'ᴘʀᴏᴏғʀᴇᴀᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘʀᴏᴏғʀᴇᴀᴅ* is coming soon!' });
    }
};
