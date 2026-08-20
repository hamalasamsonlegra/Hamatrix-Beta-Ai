module.exports = {
  name: 'appreciation',
  description: 'Command: appreciation',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *appreciation* is active.' }, { quoted: msg });
  }
};