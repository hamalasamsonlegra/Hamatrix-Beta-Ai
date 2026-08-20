module.exports = {
  name: 'izzat',
  description: 'Command: izzat',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *izzat* is active.' }, { quoted: msg });
  }
};