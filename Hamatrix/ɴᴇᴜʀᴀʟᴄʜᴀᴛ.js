module.exports = {
    name: 'ɴᴇᴜʀᴀʟᴄʜᴀᴛ',
    description: 'ɴᴇᴜʀᴀʟᴄʜᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɴᴇᴜʀᴀʟᴄʜᴀᴛ* is coming soon!' });
    }
};
