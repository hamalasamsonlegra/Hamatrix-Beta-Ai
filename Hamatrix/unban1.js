module.exports = {
  name: 'unban1',
  description: 'Unban method 1',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Unban command placeholder.' });
  }
};