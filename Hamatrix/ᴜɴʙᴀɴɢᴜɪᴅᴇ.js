module.exports = {
    name: 'ᴜɴʙᴀɴɢᴜɪᴅᴇ',
    description: 'ᴜɴʙᴀɴɢᴜɪᴅᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴜɴʙᴀɴɢᴜɪᴅᴇ* is coming soon!' });
    }
};
