module.exports = {
    name: 'ᴋɪᴍɪʜᴇʟᴘ',
    description: 'ᴋɪᴍɪʜᴇʟᴘ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋɪᴍɪʜᴇʟᴘ* is coming soon!' });
    }
};
