module.exports = {
    name: 'ʀᴇᴘᴏ',
    description: 'ʀᴇᴘᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴘᴏ* is coming soon!' });
    }
};
