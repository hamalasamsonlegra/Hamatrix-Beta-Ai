module.exports = {
  name: 'ahsan',
  description: 'Command: ahsan',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *ahsan* is active.' }, { quoted: msg });
  }
};