module.exports = {
  name: 'perfect',
  description: 'Command: perfect',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *perfect* is active.' }, { quoted: msg });
  }
};