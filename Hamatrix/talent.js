module.exports = {
  name: 'talent',
  description: 'Command: talent',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *talent* is active.' }, { quoted: msg });
  }
};