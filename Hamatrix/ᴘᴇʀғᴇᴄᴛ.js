module.exports = {
    name: 'ᴘᴇʀғᴇᴄᴛ',
    description: 'ᴘᴇʀғᴇᴄᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴘᴇʀғᴇᴄᴛ* is coming soon!' });
    }
};
