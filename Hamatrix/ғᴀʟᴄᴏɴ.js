module.exports = {
    name: 'ғᴀʟᴄᴏɴ',
    description: 'ғᴀʟᴄᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ғᴀʟᴄᴏɴ* is coming soon!' });
    }
};
