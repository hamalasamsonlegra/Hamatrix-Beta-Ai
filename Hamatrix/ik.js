module.exports = {
  name: 'ik',
  description: 'Command: ik',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *ik* is active.' }, { quoted: msg });
  }
};