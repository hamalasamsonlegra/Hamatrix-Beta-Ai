module.exports = {
    name: 'ᴅᴀʀᴇ',
    description: 'ᴅᴀʀᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴅᴀʀᴇ* is coming soon!' });
    }
};
