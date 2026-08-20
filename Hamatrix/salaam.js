module.exports = {
  name: 'salaam',
  description: 'Command: salaam',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *salaam* is active.' }, { quoted: msg });
  }
};