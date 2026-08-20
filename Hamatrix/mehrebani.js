module.exports = {
  name: 'mehrebani',
  description: 'Command: mehrebani',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *mehrebani* is active.' }, { quoted: msg });
  }
};