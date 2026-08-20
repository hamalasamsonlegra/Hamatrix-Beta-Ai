module.exports = {
  name: 'lutf',
  description: 'Command: lutf',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *lutf* is active.' }, { quoted: msg });
  }
};