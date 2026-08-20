module.exports = {
    name: 'ʀᴇᴠᴏᴋᴇ',
    description: 'ʀᴇᴠᴏᴋᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴠᴏᴋᴇ* is coming soon!' });
    }
};
