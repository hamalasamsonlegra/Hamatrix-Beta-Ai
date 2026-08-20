module.exports = {
  name: 'precious',
  description: 'Command: precious',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *precious* is active.' }, { quoted: msg });
  }
};