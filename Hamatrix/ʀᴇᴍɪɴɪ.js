module.exports = {
    name: 'ʀᴇᴍɪɴɪ',
    description: 'ʀᴇᴍɪɴɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴍɪɴɪ* is coming soon!' });
    }
};
