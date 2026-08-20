module.exports = {
  name: 'awesome',
  description: 'Command: awesome',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *awesome* is active.' }, { quoted: msg });
  }
};