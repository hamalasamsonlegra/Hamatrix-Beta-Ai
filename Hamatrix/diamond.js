module.exports = {
  name: 'diamond',
  description: 'Command: diamond',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *diamond* is active.' }, { quoted: msg });
  }
};