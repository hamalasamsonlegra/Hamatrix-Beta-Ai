module.exports = {
  name: 'gitsttalk',
  description: 'Command: gitsttalk',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *gitsttalk* is active.' }, { quoted: msg });
  }
};