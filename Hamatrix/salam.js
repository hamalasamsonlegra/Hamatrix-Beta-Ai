module.exports = {
  name: 'salam',
  description: 'Command: salam',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *salam* is active.' }, { quoted: msg });
  }
};