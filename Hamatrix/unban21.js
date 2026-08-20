module.exports = {
  name: 'unban21',
  description: 'Unban method 21',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Unban command placeholder.' });
  }
};