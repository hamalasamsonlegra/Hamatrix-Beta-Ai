module.exports = {
    name: 'sss',
    description: 'sᴛʀᴇssʟᴇᴠᴇʟ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *sᴛʀᴇssʟᴇᴠᴇʟ* is coming soon!' });
    }
};
