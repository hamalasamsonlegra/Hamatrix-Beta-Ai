module.exports = {
  name: 'tahseen',
  description: 'Command: tahseen',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *tahseen* is active.' }, { quoted: msg });
  }
};