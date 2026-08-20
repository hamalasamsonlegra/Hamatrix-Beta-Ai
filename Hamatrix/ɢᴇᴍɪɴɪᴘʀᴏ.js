module.exports = {
    name: 'ɢᴇᴍɪɴɪᴘʀᴏ',
    description: 'ɢᴇᴍɪɴɪᴘʀᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴇᴍɪɴɪᴘʀᴏ* is coming soon!' });
    }
};
