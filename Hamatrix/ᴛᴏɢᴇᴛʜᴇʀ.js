module.exports = {
    name: 'ᴛᴏɢᴇᴛʜᴇʀ',
    description: 'ᴛᴏɢᴇᴛʜᴇʀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴏɢᴇᴛʜᴇʀ* is coming soon!' });
    }
};
