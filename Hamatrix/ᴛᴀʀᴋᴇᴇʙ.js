module.exports = {
    name: 'ᴛᴀʀᴋᴇᴇʙ',
    description: 'ᴛᴀʀᴋᴇᴇʙ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴛᴀʀᴋᴇᴇʙ* is coming soon!' });
    }
};
