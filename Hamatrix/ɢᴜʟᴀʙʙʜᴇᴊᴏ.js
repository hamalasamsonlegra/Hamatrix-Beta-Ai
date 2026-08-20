module.exports = {
    name: 'ɢᴜʟᴀʙʙʜᴇᴊᴏ',
    description: 'ɢᴜʟᴀʙʙʜᴇᴊᴏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴜʟᴀʙʙʜᴇᴊᴏ* is coming soon!' });
    }
};
