module.exports = {
    name: 'ᴍᴜʙᴀʀᴀᴋ',
    description: 'ᴍᴜʙᴀʀᴀᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴜʙᴀʀᴀᴋ* is coming soon!' });
    }
};
