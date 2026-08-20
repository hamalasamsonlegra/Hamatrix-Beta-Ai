module.exports = {
    name: 'ʙʟᴏᴄᴋ',
    description: 'ʙʟᴏᴄᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙʟᴏᴄᴋ* is coming soon!' });
    }
};
