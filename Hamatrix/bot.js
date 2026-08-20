module.exports = {
  name: 'bot',
  description: 'Command: bot',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *bot* is active.' }, { quoted: msg });
  }
};