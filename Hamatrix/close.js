module.exports = {
  name: 'close',
  description: 'close command',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *close* will be implemented soon.' }, { quoted: msg });
  }
};