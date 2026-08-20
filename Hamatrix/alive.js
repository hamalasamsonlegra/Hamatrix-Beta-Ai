module.exports = {
  name: 'alive',
  description: 'Command: alive',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *alive* is active.' }, { quoted: msg });
  }
};