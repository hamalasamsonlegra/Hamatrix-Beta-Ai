module.exports = {
  name: 'shandar',
  description: 'Command: shandar',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *shandar* is active.' }, { quoted: msg });
  }
};