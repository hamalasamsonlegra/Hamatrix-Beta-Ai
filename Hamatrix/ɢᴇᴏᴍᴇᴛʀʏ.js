module.exports = {
    name: 'ɢᴇᴏᴍᴇᴛʀʏ',
    description: 'ɢᴇᴏᴍᴇᴛʀʏ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ɢᴇᴏᴍᴇᴛʀʏ* is coming soon!' });
    }
};
