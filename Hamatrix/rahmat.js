module.exports = {
  name: 'rahmat',
  description: 'Command: rahmat',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *rahmat* is active.' }, { quoted: msg });
  }
};