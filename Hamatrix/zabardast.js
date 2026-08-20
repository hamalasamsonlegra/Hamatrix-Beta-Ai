module.exports = {
  name: 'zabardast',
  description: 'Command: zabardast',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *zabardast* is active.' }, { quoted: msg });
  }
};