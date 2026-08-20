module.exports = {
  name: 'maafi',
  description: 'Command: maafi',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *maafi* is active.' }, { quoted: msg });
  }
};