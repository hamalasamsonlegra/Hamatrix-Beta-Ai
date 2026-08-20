module.exports = {
  name: 'tazeem',
  description: 'Command: tazeem',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *tazeem* is active.' }, { quoted: msg });
  }
};