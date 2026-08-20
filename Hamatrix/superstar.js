module.exports = {
  name: 'superstar',
  description: 'Command: superstar',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *superstar* is active.' }, { quoted: msg });
  }
};