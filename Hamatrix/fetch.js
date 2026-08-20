module.exports = {
  name: 'fetch',
  description: 'Command: fetch',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *fetch* is active.' }, { quoted: msg });
  }
};