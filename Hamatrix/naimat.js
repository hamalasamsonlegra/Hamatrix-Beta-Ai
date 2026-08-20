module.exports = {
  name: 'naimat',
  description: 'Command: naimat',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *naimat* is active.' }, { quoted: msg });
  }
};