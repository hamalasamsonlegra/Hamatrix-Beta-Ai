module.exports = {
  name: 'valuable',
  description: 'Command: valuable',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *valuable* is active.' }, { quoted: msg });
  }
};