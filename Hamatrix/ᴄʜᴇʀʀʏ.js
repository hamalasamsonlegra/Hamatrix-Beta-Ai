module.exports = {
    name: 'ᴄʜᴇʀʀʏ',
    description: 'ᴄʜᴇʀʀʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴇʀʀʏ* is coming soon!' });
    }
};
