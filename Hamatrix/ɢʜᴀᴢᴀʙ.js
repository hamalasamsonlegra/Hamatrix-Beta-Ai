module.exports = {
    name: 'ɢʜᴀᴢᴀʙ',
    description: 'ɢʜᴀᴢᴀʙ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢʜᴀᴢᴀʙ* is coming soon!' });
    }
};
