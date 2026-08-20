module.exports = {
    name: 'ʀᴇᴄᴏʀᴅɪɴɢ',
    description: 'ʀᴇᴄᴏʀᴅɪɴɢ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴄᴏʀᴅɪɴɢ* is coming soon!' });
    }
};
