module.exports = {
  name: 'duain',
  description: 'Command: duain',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *duain* is active.' }, { quoted: msg });
  }
};