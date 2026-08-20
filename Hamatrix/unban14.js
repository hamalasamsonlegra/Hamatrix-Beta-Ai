module.exports = {
  name: 'unban14',
  description: 'Unban method 14',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Unban command placeholder.' });
  }
};