module.exports = {
    name: 'ʀᴇᴘᴇᴀᴛ',
    description: 'ʀᴇᴘᴇᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴘᴇᴀᴛ* is coming soon!' });
    }
};
