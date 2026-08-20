module.exports = {
    name: 'ɢᴇᴍ',
    description: 'ɢᴇᴍ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴇᴍ* is coming soon!' });
    }
};
