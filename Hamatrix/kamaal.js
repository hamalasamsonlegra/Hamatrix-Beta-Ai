module.exports = {
  name: 'kamaal',
  description: 'Command: kamaal',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *kamaal* is active.' }, { quoted: msg });
  }
};