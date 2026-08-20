module.exports = {
    name: 'ᴄʏʙᴇʀᴘᴜɴᴋ',
    description: 'ᴄʏʙᴇʀᴘᴜɴᴋ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʏʙᴇʀᴘᴜɴᴋ* is coming soon!' });
    }
};
