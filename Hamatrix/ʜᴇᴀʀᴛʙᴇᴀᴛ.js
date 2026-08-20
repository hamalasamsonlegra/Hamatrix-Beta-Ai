module.exports = {
    name: 'ʜᴇᴀʀᴛʙᴇᴀᴛ',
    description: 'ʜᴇᴀʀᴛʙᴇᴀᴛ (coming soon)',
    async execute(sock, msg, args) {
        await sock.sendMessage(msg.key.remoteJid, { text: '🚧 Command *ʜᴇᴀʀᴛʙᴇᴀᴛ* is coming soon!' });
    }
};
