module.exports = {
  name: 'shafqat',
  description: 'Command: shafqat',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *shafqat* is active.' }, { quoted: msg });
  }
};