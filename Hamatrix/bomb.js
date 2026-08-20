module.exports = {
  name: 'bomb',
  description: 'Command: bomb',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *bomb* is active.' }, { quoted: msg });
  }
};