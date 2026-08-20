module.exports = {
  name: 'deserving',
  description: 'Command: deserving',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *deserving* is active.' }, { quoted: msg });
  }
};