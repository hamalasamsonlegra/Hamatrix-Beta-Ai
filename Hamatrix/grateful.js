module.exports = {
  name: 'grateful',
  description: 'Command: grateful',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *grateful* is active.' }, { quoted: msg });
  }
};