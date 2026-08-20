module.exports = {
  name: 'mena2',
  description: 'Command: mena2',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *mena2* is active.' }, { quoted: msg });
  }
};