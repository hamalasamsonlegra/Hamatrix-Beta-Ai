module.exports = {
    name: 'ᴄᴏʀʀᴇᴄᴛ',
    description: 'ᴄᴏʀʀᴇᴄᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ᴄᴏʀʀᴇᴄᴛ* is coming soon!' });
    }
};
