module.exports = {
  name: 'inayat',
  description: 'Command: inayat',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *inayat* is active.' }, { quoted: msg });
  }
};