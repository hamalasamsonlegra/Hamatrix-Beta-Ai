module.exports = {
    name: 'sx',
    description: 'sᴍᴇxʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *sᴍᴇxʏ* is coming soon!' });
    }
};
