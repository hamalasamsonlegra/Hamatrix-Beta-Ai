module.exports = {
    name: 'ᴍᴇᴅɪᴀғɪʀᴇ',
    description: 'ᴍᴇᴅɪᴀғɪʀᴇ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴍᴇᴅɪᴀғɪʀᴇ* is coming soon!' });
    }
};
