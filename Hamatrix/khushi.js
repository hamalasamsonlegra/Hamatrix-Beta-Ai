module.exports = {
  name: 'khushi',
  description: 'Command: khushi',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *khushi* is active.' }, { quoted: msg });
  }
};