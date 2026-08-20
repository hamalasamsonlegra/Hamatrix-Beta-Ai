module.exports = {
  name: 'rolemodel',
  description: 'Command: rolemodel',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *rolemodel* is active.' }, { quoted: msg });
  }
};