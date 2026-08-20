module.exports = {
    name: 'ᴇᴍʙʀᴀᴄᴇ',
    description: 'ᴇᴍʙʀᴀᴄᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇᴍʙʀᴀᴄᴇ* is coming soon!' });
    }
};
