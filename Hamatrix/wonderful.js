module.exports = {
  name: 'wonderful',
  description: 'Command: wonderful',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *wonderful* is active.' }, { quoted: msg });
  }
};