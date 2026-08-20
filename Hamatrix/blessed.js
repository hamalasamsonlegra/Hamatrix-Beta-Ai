module.exports = {
  name: 'blessed',
  description: 'Command: blessed',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *blessed* is active.' }, { quoted: msg });
  }
};