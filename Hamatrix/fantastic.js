module.exports = {
  name: 'fantastic',
  description: 'Command: fantastic',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *fantastic* is active.' }, { quoted: msg });
  }
};