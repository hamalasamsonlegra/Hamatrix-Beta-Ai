module.exports = {
  name: 'praytime',
  description: 'Command: praytime',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *praytime* is active.' }, { quoted: msg });
  }
};