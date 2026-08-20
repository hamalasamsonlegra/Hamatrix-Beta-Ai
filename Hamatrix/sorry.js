module.exports = {
  name: 'sorry',
  description: 'Command: sorry',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *sorry* is active.' }, { quoted: msg });
  }
};