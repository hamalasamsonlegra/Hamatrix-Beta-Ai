module.exports = {
  name: 'barkatein',
  description: 'Command: barkatein',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *barkatein* is active.' }, { quoted: msg });
  }
};