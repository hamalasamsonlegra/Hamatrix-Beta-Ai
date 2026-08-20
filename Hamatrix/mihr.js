module.exports = {
  name: 'mihr',
  description: 'Command: mihr',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *mihr* is active.' }, { quoted: msg });
  }
};