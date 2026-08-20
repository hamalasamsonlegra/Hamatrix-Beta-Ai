module.exports = {
  name: 'jazakallah',
  description: 'Command: jazakallah',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *jazakallah* is active.' }, { quoted: msg });
  }
};