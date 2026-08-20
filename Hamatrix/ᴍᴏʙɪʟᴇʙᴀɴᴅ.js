module.exports = {
    name: 'ᴍᴏʙɪʟᴇʙᴀɴᴅ',
    description: 'ᴍᴏʙɪʟᴇʙᴀɴᴅ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴏʙɪʟᴇʙᴀɴᴅ* is coming soon!' });
    }
};
