module.exports = {
  name: 'subhanallah',
  description: 'Command: subhanallah',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *subhanallah* is active.' }, { quoted: msg });
  }
};