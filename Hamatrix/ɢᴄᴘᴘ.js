module.exports = {
    name: 'ɢᴄᴘᴘ',
    description: 'ɢᴄᴘᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴄᴘᴘ* is coming soon!' });
    }
};
