module.exports = {
    name: '4',
    description: 'ɢᴘᴛ4 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴘᴛ4* is coming soon!' });
    }
};
