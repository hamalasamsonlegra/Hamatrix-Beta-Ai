module.exports = {
    name: 'xss',
    description: 'ᴇxᴀᴍsᴇᴀsᴏɴ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴇxᴀᴍsᴇᴀsᴏɴ* is coming soon!' });
    }
};
