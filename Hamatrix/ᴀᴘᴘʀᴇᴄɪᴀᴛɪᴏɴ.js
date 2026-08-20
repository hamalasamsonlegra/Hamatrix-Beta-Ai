module.exports = {
    name: 'ᴀᴘᴘʀᴇᴄɪᴀᴛɪᴏɴ',
    description: 'ᴀᴘᴘʀᴇᴄɪᴀᴛɪᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴀᴘᴘʀᴇᴄɪᴀᴛɪᴏɴ* is coming soon!' });
    }
};
