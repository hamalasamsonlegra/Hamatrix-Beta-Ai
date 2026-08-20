module.exports = {
    name: 'ᴋᴏʀᴇᴀ',
    description: 'ᴋᴏʀᴇᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴋᴏʀᴇᴀ* is coming soon!' });
    }
};
