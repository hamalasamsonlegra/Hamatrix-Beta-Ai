module.exports = {
  name: 'adab',
  description: 'Command: adab',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *adab* is active.' }, { quoted: msg });
  }
};