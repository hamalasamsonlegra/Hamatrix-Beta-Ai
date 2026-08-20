module.exports = {
  name: 'hero',
  description: 'Command: hero',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *hero* is active.' }, { quoted: msg });
  }
};