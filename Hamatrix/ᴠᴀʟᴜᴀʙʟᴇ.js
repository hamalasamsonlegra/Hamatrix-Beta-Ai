module.exports = {
    name: 'ᴠᴀʟᴜᴀʙʟᴇ',
    description: 'ᴠᴀʟᴜᴀʙʟᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴠᴀʟᴜᴀʙʟᴇ* is coming soon!' });
    }
};
