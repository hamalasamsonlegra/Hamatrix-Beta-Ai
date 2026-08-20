module.exports = {
    name: 'ғᴇᴛᴄʜ',
    description: 'ғᴇᴛᴄʜ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ғᴇᴛᴄʜ* is coming soon!' });
    }
};
