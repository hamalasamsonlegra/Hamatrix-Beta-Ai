module.exports = {
    name: 'ᴍᴇʀᴀʜᴇʀᴏ',
    description: 'ᴍᴇʀᴀʜᴇʀᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴇʀᴀʜᴇʀᴏ* is coming soon!' });
    }
};
