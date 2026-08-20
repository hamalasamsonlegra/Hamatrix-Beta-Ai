module.exports = {
    name: 's',
    description: 'ᴘɪᴇs (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘɪᴇs* is coming soon!' });
    }
};
