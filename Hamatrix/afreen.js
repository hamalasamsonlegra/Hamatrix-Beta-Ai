module.exports = {
  name: 'afreen',
  description: 'Command: afreen',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *afreen* is active.' }, { quoted: msg });
  }
};