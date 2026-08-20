module.exports = {
  name: 'inspiration',
  description: 'Command: inspiration',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *inspiration* is active.' }, { quoted: msg });
  }
};