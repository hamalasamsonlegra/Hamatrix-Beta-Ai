module.exports = {
  name: 'nawaz',
  description: 'Command: nawaz',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *nawaz* is active.' }, { quoted: msg });
  }
};