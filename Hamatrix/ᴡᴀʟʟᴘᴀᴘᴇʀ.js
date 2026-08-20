module.exports = {
    name: 'ᴡᴀʟʟᴘᴀᴘᴇʀ',
    description: 'ᴡᴀʟʟᴘᴀᴘᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴀʟʟᴘᴀᴘᴇʀ* is coming soon!' });
    }
};
