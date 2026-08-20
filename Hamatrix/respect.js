module.exports = {
  name: 'respect',
  description: 'Command: respect',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *respect* is active.' }, { quoted: msg });
  }
};