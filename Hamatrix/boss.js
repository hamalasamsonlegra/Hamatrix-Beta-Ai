module.exports = {
  name: 'boss',
  description: 'Command: boss',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *boss* is active.' }, { quoted: msg });
  }
};