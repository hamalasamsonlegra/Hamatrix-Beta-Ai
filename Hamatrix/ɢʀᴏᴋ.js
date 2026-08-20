module.exports = {
    name: 'ɢʀᴏᴋ',
    description: 'ɢʀᴏᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢʀᴏᴋ* is coming soon!' });
    }
};
