module.exports = {
    name: 'ɴᴇᴋᴏ',
    description: 'ɴᴇᴋᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴇᴋᴏ* is coming soon!' });
    }
};
