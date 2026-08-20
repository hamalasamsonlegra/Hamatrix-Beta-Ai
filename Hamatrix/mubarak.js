module.exports = {
  name: 'mubarak',
  description: 'Command: mubarak',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *mubarak* is active.' }, { quoted: msg });
  }
};