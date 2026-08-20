module.exports = {
    name: 'ᴍᴇʜʀʙᴀɴɪ',
    description: 'ᴍᴇʜʀʙᴀɴɪ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴇʜʀʙᴀɴɪ* is coming soon!' });
    }
};
