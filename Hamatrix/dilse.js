module.exports = {
  name: 'dilse',
  description: 'Command: dilse',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *dilse* is active.' }, { quoted: msg });
  }
};