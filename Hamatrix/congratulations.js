module.exports = {
  name: 'congratulations',
  description: 'Command: congratulations',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *congratulations* is active.' }, { quoted: msg });
  }
};