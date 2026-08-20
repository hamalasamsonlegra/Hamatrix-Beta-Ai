module.exports = {
    name: 'x',
    description: 'ᴘᴇʀᴘʟᴇxɪᴛʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴇʀᴘʟᴇxɪᴛʏ* is coming soon!' });
    }
};
