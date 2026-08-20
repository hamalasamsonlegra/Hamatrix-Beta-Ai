module.exports = {
    name: 'ʙᴇᴡᴀғᴀ',
    description: 'ʙᴇᴡᴀғᴀ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʙᴇᴡᴀғᴀ* is coming soon!' });
    }
};
