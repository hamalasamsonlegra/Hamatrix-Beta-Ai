module.exports = {
  name: 'qadr',
  description: 'Command: qadr',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *qadr* is active.' }, { quoted: msg });
  }
};