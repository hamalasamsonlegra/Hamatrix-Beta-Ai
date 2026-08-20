module.exports = {
    name: 'ɢᴏᴏᴅʙʏᴇ',
    description: 'ɢᴏᴏᴅʙʏᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴏᴏᴅʙʏᴇ* is coming soon!' });
    }
};
