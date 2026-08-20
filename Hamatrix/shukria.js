module.exports = {
  name: 'shukria',
  description: 'Command: shukria',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *shukria* is active.' }, { quoted: msg });
  }
};