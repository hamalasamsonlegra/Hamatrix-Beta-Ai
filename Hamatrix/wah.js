module.exports = {
  name: 'wah',
  description: 'Command: wah',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *wah* is active.' }, { quoted: msg });
  }
};