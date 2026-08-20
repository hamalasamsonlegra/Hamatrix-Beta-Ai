module.exports = {
  name: 'excellence',
  description: 'Command: excellence',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *excellence* is active.' }, { quoted: msg });
  }
};