module.exports = {
  name: 'thankyou',
  description: 'Command: thankyou',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *thankyou* is active.' }, { quoted: msg });
  }
};