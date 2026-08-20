module.exports = {
    name: 'ʙʟᴜᴇᴀʀᴄʜɪᴠᴇ',
    description: 'ʙʟᴜᴇᴀʀᴄʜɪᴠᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙʟᴜᴇᴀʀᴄʜɪᴠᴇ* is coming soon!' });
    }
};
