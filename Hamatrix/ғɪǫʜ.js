module.exports = {
    name: 'ғɪǫʜ',
    description: 'ғɪǫʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ғɪǫʜ* is coming soon!' });
    }
};
