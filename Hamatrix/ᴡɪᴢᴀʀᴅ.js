module.exports = {
    name: 'ᴡɪᴢᴀʀᴅ',
    description: 'ᴡɪᴢᴀʀᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡɪᴢᴀʀᴅ* is coming soon!' });
    }
};
