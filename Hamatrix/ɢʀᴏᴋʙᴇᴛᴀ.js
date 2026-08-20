module.exports = {
    name: 'ɢʀᴏᴋʙᴇᴛᴀ',
    description: 'ɢʀᴏᴋʙᴇᴛᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢʀᴏᴋʙᴇᴛᴀ* is coming soon!' });
    }
};
