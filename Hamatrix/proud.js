module.exports = {
  name: 'proud',
  description: 'Command: proud',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *proud* is active.' }, { quoted: msg });
  }
};