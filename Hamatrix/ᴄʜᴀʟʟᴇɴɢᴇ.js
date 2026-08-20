module.exports = {
    name: 'ᴄʜᴀʟʟᴇɴɢᴇ',
    description: 'ᴄʜᴀʟʟᴇɴɢᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜᴀʟʟᴇɴɢᴇ* is coming soon!' });
    }
};
