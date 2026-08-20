module.exports = {
    name: 'ᴡᴇᴇᴋʟʏʀᴇᴘᴏʀᴛ',
    description: 'ᴡᴇᴇᴋʟʏʀᴇᴘᴏʀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴡᴇᴇᴋʟʏʀᴇᴘᴏʀᴛ* is coming soon!' });
    }
};
