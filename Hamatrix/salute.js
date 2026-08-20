module.exports = {
  name: 'salute',
  description: 'Command: salute',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *salute* is active.' }, { quoted: msg });
  }
};