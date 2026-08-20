module.exports = {
  name: 'karam',
  description: 'Command: karam',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *karam* is active.' }, { quoted: msg });
  }
};