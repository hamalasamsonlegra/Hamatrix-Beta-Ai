module.exports = {
  name: 'legend',
  description: 'Command: legend',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *legend* is active.' }, { quoted: msg });
  }
};