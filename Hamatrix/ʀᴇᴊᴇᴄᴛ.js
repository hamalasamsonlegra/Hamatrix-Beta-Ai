module.exports = {
    name: 'ʀᴇᴊᴇᴄᴛ',
    description: 'ʀᴇᴊᴇᴄᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʀᴇᴊᴇᴄᴛ* is coming soon!' });
    }
};
