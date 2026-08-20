module.exports = {
  name: 'ownerinfo',
  description: 'Command: ownerinfo',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *ownerinfo* is active.' }, { quoted: msg });
  }
};