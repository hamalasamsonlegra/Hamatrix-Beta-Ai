module.exports = {
  name: 'champion',
  description: 'Command: champion',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *champion* is active.' }, { quoted: msg });
  }
};