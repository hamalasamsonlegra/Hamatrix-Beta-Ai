module.exports = {
  name: 'tasleem',
  description: 'Command: tasleem',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *tasleem* is active.' }, { quoted: msg });
  }
};