module.exports = {
    name: 'ɢᴇᴍɪɴɪ',
    description: 'ɢᴇᴍɪɴɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴇᴍɪɴɪ* is coming soon!' });
    }
};
