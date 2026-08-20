module.exports = {
  name: 'skillful',
  description: 'Command: skillful',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *skillful* is active.' }, { quoted: msg });
  }
};