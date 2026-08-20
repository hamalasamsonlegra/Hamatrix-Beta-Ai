module.exports = {
  name: 'news',
  description: 'Command: news',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *news* is active.' }, { quoted: msg });
  }
};