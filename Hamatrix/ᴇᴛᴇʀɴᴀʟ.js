module.exports = {
    name: 'ᴇᴛᴇʀɴᴀʟ',
    description: 'ᴇᴛᴇʀɴᴀʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇᴛᴇʀɴᴀʟ* is coming soon!' });
    }
};
