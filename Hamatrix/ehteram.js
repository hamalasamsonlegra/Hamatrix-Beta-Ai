module.exports = {
  name: 'ehteram',
  description: 'Command: ehteram',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *ehteram* is active.' }, { quoted: msg });
  }
};