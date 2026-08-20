module.exports = {
  name: 'lajawab',
  description: 'Command: lajawab',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *lajawab* is active.' }, { quoted: msg });
  }
};