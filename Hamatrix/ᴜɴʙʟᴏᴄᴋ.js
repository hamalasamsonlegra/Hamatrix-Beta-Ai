module.exports = {
    name: 'ᴜɴʙʟᴏᴄᴋ',
    description: 'ᴜɴʙʟᴏᴄᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙʟᴏᴄᴋ* is coming soon!' });
    }
};
