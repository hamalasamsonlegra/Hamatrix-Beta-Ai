module.exports = {
  name: 'unban30',
  description: 'Unban method 30',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Unban command placeholder.' });
  }
};