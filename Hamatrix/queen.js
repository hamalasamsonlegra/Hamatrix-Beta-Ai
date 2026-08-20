module.exports = {
  name: 'queen',
  description: 'Command: queen',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *queen* is active.' }, { quoted: msg });
  }
};