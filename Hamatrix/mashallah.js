module.exports = {
  name: 'mashallah',
  description: 'Command: mashallah',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *mashallah* is active.' }, { quoted: msg });
  }
};