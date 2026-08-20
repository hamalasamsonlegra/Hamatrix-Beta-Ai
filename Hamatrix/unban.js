module.exports = {
  name: 'unban',
  description: 'unban command',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *unban* will be implemented soon.' }, { quoted: msg });
  }
};