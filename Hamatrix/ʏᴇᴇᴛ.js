module.exports = {
    name: 'ʏᴇᴇᴛ',
    description: 'ʏᴇᴇᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʏᴇᴇᴛ* is coming soon!' });
    }
};
