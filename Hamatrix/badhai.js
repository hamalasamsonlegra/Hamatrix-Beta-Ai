module.exports = {
  name: 'badhai',
  description: 'Command: badhai',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *badhai* is active.' }, { quoted: msg });
  }
};