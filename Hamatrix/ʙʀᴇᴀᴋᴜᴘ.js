module.exports = {
    name: 'ʙʀᴇᴀᴋᴜᴘ',
    description: 'ʙʀᴇᴀᴋᴜᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙʀᴇᴀᴋᴜᴘ* is coming soon!' });
    }
};
