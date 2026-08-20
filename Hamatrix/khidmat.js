module.exports = {
  name: 'khidmat',
  description: 'Command: khidmat',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *khidmat* is active.' }, { quoted: msg });
  }
};