module.exports = {
    name: 'ʜᴇᴀʀᴛ',
    description: 'ʜᴇᴀʀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴇᴀʀᴛ* is coming soon!' });
    }
};
