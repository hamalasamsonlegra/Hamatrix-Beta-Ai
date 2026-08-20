module.exports = {
    name: 'ᴄʜʀᴇᴀᴄᴛ',
    description: 'ᴄʜʀᴇᴀᴄᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄʜʀᴇᴀᴄᴛ* is coming soon!' });
    }
};
