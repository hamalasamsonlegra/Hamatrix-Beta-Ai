module.exports = {
    name: 'ᴄᴏᴢʏ',
    description: 'ᴄᴏᴢʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴢʏ* is coming soon!' });
    }
};
