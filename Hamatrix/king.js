module.exports = {
  name: 'king',
  description: 'Command: king',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *king* is active.' }, { quoted: msg });
  }
};