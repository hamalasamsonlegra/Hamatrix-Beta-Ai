module.exports = {
    name: 'ᴇʜᴛʀᴀᴍ',
    description: 'ᴇʜᴛʀᴀᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇʜᴛʀᴀᴍ* is coming soon!' });
    }
};
