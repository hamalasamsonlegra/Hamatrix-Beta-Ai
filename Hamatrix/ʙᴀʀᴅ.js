module.exports = {
    name: 'ʙᴀʀᴅ',
    description: 'ʙᴀʀᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴀʀᴅ* is coming soon!' });
    }
};
