module.exports = {
  name: 'mentor',
  description: 'Command: mentor',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *mentor* is active.' }, { quoted: msg });
  }
};