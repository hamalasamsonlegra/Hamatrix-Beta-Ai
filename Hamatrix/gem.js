module.exports = {
  name: 'gem',
  description: 'Command: gem',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *gem* is active.' }, { quoted: msg });
  }
};