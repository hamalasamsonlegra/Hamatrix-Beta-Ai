module.exports = {
    name: 'ɴᴇᴡɢᴄ',
    description: 'ɴᴇᴡɢᴄ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴇᴡɢᴄ* is coming soon!' });
    }
};
