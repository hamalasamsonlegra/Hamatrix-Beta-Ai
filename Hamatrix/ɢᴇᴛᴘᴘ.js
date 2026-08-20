module.exports = {
    name: 'ɢᴇᴛᴘᴘ',
    description: 'ɢᴇᴛᴘᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴇᴛᴘᴘ* is coming soon!' });
    }
};
