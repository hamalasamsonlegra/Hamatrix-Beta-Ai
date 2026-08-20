module.exports = {
    name: '5',
    description: 'ᴄᴏᴅᴇᴛ5 (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏᴅᴇᴛ5* is coming soon!' });
    }
};
